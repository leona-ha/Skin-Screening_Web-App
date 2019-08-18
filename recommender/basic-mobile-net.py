# organize imports
import numpy as np
import tensorflow
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications import mobilenet
import tensorflowjs as tfjs

# process an image to be mobilenet friendly
def process_image(img_path):
  img = image.load_img(img_path, target_size=(224, 224))
  img_array = image.img_to_array(img)
  img_array = np.expand_dims(img_array, axis=0)
  pImg = mobilenet.preprocess_input(img_array)
  return pImg

# main function
if __name__ == '__main__':

  # define the mobilenet model
  trained_model = tensorflow.keras.models.load_model('model.h5', compile=False)


  # convert the mobilenet model into tf.js model
  save_path = "model"
  tfjs.converters.save_keras_model(trained_model, save_path)
  print("[INFO] saved tf.js mobilenet model to disk..")
