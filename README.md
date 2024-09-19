# Movie_Success_ML
#### Project 4: Team #5

## Overview
This project aims to predict whether a movie will be successful prior to its release, based on factors such as revenue, popularity, IMDb rating, Rotten Tomatoes rating, and Metacritic rating.

## Directory Structure
#### ETL
This file extracts information using our various API keys, transforms the data according to our needs, and cleans it appropriately before exporting the information into four different CSV files located in our resources folder.

#### Resources
This directory contains:
- `movies_dataset_0.csv`
- `movies_dataset_1.csv`
- `movies_dataset_2.csv`
- `movies_dataset_3.csv`
- `test.csv`

#### Libraries Used
- **Numpy**: Essential for data manipulation, especially when creating and handling CSV files.
- **Pandas**: Our go-to library for data analysis, making it easy to work with data in DataFrames.
- **Matplotlib**: Used for creating visualizations, helping us present our findings clearly.
- **Scipy**: Helpful for statistical analysis, providing tools for hypothesis testing and more.
- **Json & Requests**: Key for fetching data from the TMDB and OMDB APIs, allowing us to gather movie information efficiently.
- **TensorFlow**: Used for building and training our machine learning models, particularly for deep learning tasks.
- **Sklearn**: A powerful library for machine learning, used for model training, evaluation, and preprocessing.

#### .gitignore
This directory contains sensitive information, such as the Private_info folder, to prevent accidental sharing of credentials.

#### Private_info
This directory contains private information like API keys, which are included in the `.gitignore` file. Please set up the following file with the given name to provide credentials:

- config.py:
  
Python
Copy code
```
tmdb_key = '<SOME_VALUE>'
omdb_api_key_0_yp = '<SOME_VALUE>'
omdb_api_key_1_yp = '<SOME_VALUE>'
omdb_api_key_2_mt = '<SOME_VALUE>'
omdb_api_key_3_al = '<SOME_VALUE>'
omdb_api_key_4_aj = '<SOME_VALUE>'
```

> [!NOTE]
>Please have into consideration that we created to option to run our files: Visual Studio Code and Google Colab so feel free to choose your prefered choice

#### optimization
This folder contains a series of attempts to improve our model accuracy, showcasing different strategies employed.

#### Project Documentation
- **Project 4 Project Proposal.docx**: Contains the initial proposal for this project.
- **Project 4 Analysis.docx**: Contains our final written analysis for the complete project.

#### Movie Success.pptx
This powerpoint presentation contains our final presentation. Displaying visualizations and the steps we took to create our machine learning models.

#### data_processing&analysis.ipynb
The notebook `data_processing&analysis.ipynb` details the process of preparing our data, including one-hot encoding and exploratory analysis.


#### Machine Learning Models
The following files contain our final attempts at machine learning models, where we achieved an accuracy of 75%:
- `tensor_flow_final.ipynb`
- `random_forest_final.ipynb`


#### Sources
- TMDB API (The Movies Dataset)
[Link](https://www.themoviedb.org/signup?language=en-US)
- OMDB API (Open Mvoies Dataset)
[Link](http://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0oCxKYG7xaZwy2ktIrVmWGdWzxj%2FDhHQaAqqFYTiRTDE%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU%2BO86JjTqdg0yhuGR2tBukmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulHLL4j%2B3qCcW3ReXhfb4KKsSs3zlQ%2B48KY6Qzm7wzZbR&at=freeAcct&Email=)
  

#### Team Members & Responsabilities
- [x] **Yesmelin Perdomo**: ETL,presentation, data processing and analysis (Spark), machine learning models, visualizations, and Git organization.
- [x] **Amanda Lor**: Machine learning models, presentation, visualization and written analysis.
- [x] **Alyssa Jones**: Project proposal, Machine learning models, presentation, visualization and written analysis.
- [x] **Marisol Trejo**: Machine learning models, presentation, and visualization.

#### Help
- Technical assistance
- Instructor
- Expert Learning
- Tutoring
