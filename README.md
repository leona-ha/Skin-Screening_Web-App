# Skin-Check: A deep-learning based Web-Application for Skin Cancer Detection

Skin Cancer is one of the most common forms of cancer, with increasing incidence. In Germany, it makes up one third of all cancer diagnoses (https://www.tk.de/techniker/gesundheit-und-medizin/praevention-und-frueherkennung/hautkrebs-fruehererkennung/hautkrebs-wie-hoch-ist-das-risiko-2015296). While Basal Cell Carcinoma (BCC) is the most frequent type of skin cancer, Melanoma is considered the most dangerous one. In both cases, however, early diagnosis is crucial to facilitate successfull treatment.

Since lesions occur on the surface of the skin, visual detection via dermatoscopy (an imaging technique that enables visualisation of deeper skin levels by removing surface reflection) is the best practice. With the widespread availability of high resolution cameras and even smartphone devices for skin monitoring (e.g. https://dermlite.com/products/dermlite-hud), research on automated analysis is growing. As an important step in the development of automated diagnostics, the International Skin Imaging Collaboration (ISIC) is hosting challenges on skin lesion analysis since 2016, providing the world's largest repository of standardized, publicly available dermatoscopic images.

This project aims to provide a web-application that classifies uploaded images of skin lesions into one of the following diagnostic labels:
1. Melanocytic Nevus (nv)
2. Dermatofibroma (df)
3. Melanoma (mel)
4. Basal Cell Carcinoma (bcc)
5. Actinic Keratosis (aciec)
6. Benign Keratosis (bkl)
7. Vascular lesions (vasc)

![Diagnostic Images]
(https://challenge2018.isic-archive.com/wp-content/uploads/2018/04/task3.png)

For this project, I used the HAM10000 ("Human against machine with 10000 images) dataset, a collection of 10015 dermatoscopic images that were made publibly available for the ISIC challenge, to train an artifical neural network to diagnose the pigmented skin lesions. Since the risk of skin cancer increases with age and is higher in men, I included age and gender to improve accuracy.
**Please note:** Although I achieved a categorical accuracy of around 81%, the final model is heavily biased towards Nevi and thus should not (yet) be used for diagnostic purposes.

## About the dataset

## Original Data Source

### Original Challenge:
* https://challenge2018.isic-archive.com
* https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T
[1] Noel Codella, Veronica Rotemberg, Philipp Tschandl, M. Emre Celebi, Stephen Dusza, David Gutman, Brian Helba, Aadi Kalloo, Konstantinos Liopyris, Michael Marchetti, Harald Kittler, Allan Halpern: “Skin Lesion Analysis Toward Melanoma Detection 2018: A Challenge Hosted by the International Skin Imaging Collaboration (ISIC)”, 2018; https://arxiv.org/abs/1902.03368
[2] Tschandl, P., Rosendahl, C. & Kittler, H. The HAM10000 dataset, a large collection of multi-source dermatoscopic images of common pigmented skin lesions. Sci. Data 5, 180161 doi:10.1038/sdata.2018.161 (2018).
