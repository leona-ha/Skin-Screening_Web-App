def get_input(path):
    img = image.load_img(path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return(img_array)

def get_dem_input(i):
    age = batch.loc[i].age
    sex = batch.loc[i].sex
    input2 = np.append(age,sex)
    return(input2)

def preprocess_input(img):
    """ Same preprocessing function as mobilenets preprocess input"""
    img /= 255.
    img -= 0.5
    img *= 2.
    return img

def image_generator(df, batch_size, source_dir):
    """Attention: relative image path should be set as Dataframe index
    Arguments:
    - source_dir = either train or validation diectory"""
    while True:
        # Select files (paths/indices) for the batch
        batch = df.sample(n=batch_size, replace=False)
        batch_paths = batch.aug_id.to_list()

        batch_input1 = []
        batch_input2 = []
        batch_output = []

        # Read in each input, perform preprocessing and get labels
        for i in batch.index:

            full_path = source_dir + str(batch.loc[i].dx) + "/" + str(batch.loc[i].aug_id)
            input1 = get_input(full_path)
            input2 = get_dem_input(i)
            output = batch.loc[i].dx

            input = preprocess_input(image=input1)
            batch_input1 += [ input1 ]
            batch_input2 += [ input2 ]
            batch_output += [ output ]
          # Return a tuple of (input,output) to feed the network
        batch_x1 = np.array(batch_input1)
        batch_x2 = np.array(batch_input2)
        batch_y = np.array(batch_output)

        yield[batch_x1, batch_x2], batch_y
