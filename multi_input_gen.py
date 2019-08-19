lb = LabelBinarizer()
lb.fit(train_pr.dx)

def get_input(path):
    img = load_img(path, target_size=(224, 224))
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return(img_array)

def preprocess_input(img):
    """ Same preprocessing function as mobilenets preprocess input"""
    img /= 255.
    img -= 0.5
    img *= 2.
    return img

def multi_input_generator(df, batch_size, source_dir,shuffle=True):
    """Read images and metadata from dataframe.
    Arguments:
    - source_dir = either train or validation diectory
    -> important: for test batches set shuffle=False and batch_size=1"""

    idx = 0

    while True:
        if shuffle:
            batch = df.sample(n=batch_size, replace=False)
        else:
            batch = df.loc[idx:(idx*batch_size), :] #attention:works only with batch_size=1

        batch_input1 = []
        batch_input2 = []
        batch_output = []

        # Read in each input, perform preprocessing and get labels
        for i in batch.index:

            full_path = source_dir + str(batch.loc[i].dx) + "/" + str(batch.loc[i].aug_id)
            input1 = get_input(full_path)
            input2 = [batch.loc[i].age, batch.loc[i].sex]
            output = batch.loc[i].dx

            input_pre = preprocess_input(input1)
            batch_input1 += [ input_pre ]
            batch_input2 += [ input2 ]
            batch_output += [ output ]

        # flatten the image list so that it looks like the tensorflow iterator
        batch_input1 = [val for sublist in batch_input1 for val in sublist]

        # Return a tuple of ([input,input],output) to feed the network
        batch_x1 = np.array(batch_input1)
        batch_x2 = np.array(batch_input2, dtype="float32")
        batch_y = lb.transform(np.array(batch_output)).astype("float32")

        yield[batch_x1, batch_x2], batch_y
        idx += 1

        if idx >= len(df):
                break
