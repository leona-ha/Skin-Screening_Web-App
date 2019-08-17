import numpy as np
import pandas as pd
import pickle as picklerick
from sklearn.decomposition import NMF
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Table
from flask import render_template
import os


engine = create_engine(f'postgres://postgres:postgres@localhost/movielens')
base = declarative_base(engine)
Session = sessionmaker(engine)
session = Session()
metadata = base.metadata
ratings = Table('ratings', metadata, autoload=True)
movies = Table('movies', metadata, autoload=True)
tags = Table('tags', metadata, autoload=True)
umr = Table('user_movie_ratings', metadata, autoload=True)


def retrain_nmf():
    #this is a function which retrains periodically my nmf model
    #it should be trained on the latest user-ratings matrix available
    R = np.array(session.query(umr).all()).T
    #create a model and set the hyperparameters
    # model assumes R ~ PQ'
    model = NMF(n_components=10, init='random', random_state=10,)
    model.fit(R)
    Q = model.components_  # movie-genre matrix
    P = model.transform(R)  # user-genre matrix
    error = model.reconstruction_err_ #reconstruction error
    nR = np.dot(P, Q) #the reconstructed matrix
    #pickle my model
    list_pickle_path = os.path.dirname(os.path.abspath(__file__))+'/nmf.pkl'
    nmf_pickle = open(list_pickle_path, 'wb')
    picklerick.dump(model, nmf_pickle)
    nmf_pickle.close()
    return


def get_ml_recommendations(user_input):
    #load an nmf model
    list_pickle_path = os.path.dirname(os.path.abspath(__file__))+'/nmf.pkl'
    nmf_unpickle = open(list_pickle_path, 'rb')
    model = picklerick.load(nmf_unpickle)

    #find out the movie_id for each movie title
    movie_titles = [x[1] for x in user_input[::2]]
    movie_ratings = [x[1] for x in user_input[1::2]]
    movie_ids = []

    for title in movie_titles:

            db_result = session.query(movies).filter(movies.columns.title.ilike(f'%{title}%')).limit(1).all()
            print(db_result)
            movie_ids.append(db_result[0][0])


    #create an array of len == no. of columns in umr, works because umr is transposed
    data_len = session.query(umr).count()
    query = np.full(data_len, 3.5) #fill it with median rating

    #except for relevant film titles, which are filled with the rating
    for i in range(len(movie_ids)):
        query[movie_ids[i]] = movie_ratings[i]

    query = query.reshape(-1,1).T
    Q = model.components_
    #in this case, a new user providing ratings for the 3 movies.
    P = model.transform(query)

    recommendation = np.dot(P,Q)[0] #take the result of the prediction
    recommendation = np.argsort(recommendation) #get the index of the best values
    recommendation = [x for x in recommendation if x not in movie_ids]
    random = recommendation[-10:][np.random.randint(0,9)] # pick one at random
    print(session.query(movies.columns.title).filter(movies.columns.index == f'{random}').all())
    film = session.query(movies.columns.title).filter(movies.columns.index == f'{random}').all()[0][0]
    return str(film)
