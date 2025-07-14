# Python Text Analysis Project 📚🐍

Quick demonstration of two topics:

> **Topic#1:** Using Python in Jupyter Notebook to analyze text data. We perform basic text preprocessing and word frequency analysis using a sample book file (`pg4680.txt`).

> **Topic#2:** Using built-in Python libraries to clean, tokenize, and count words without needing third-party dependencies.

---

# Python Libraries Used:

We are using basic Python libraries like:

- `re` – to extract words using regular expressions
- `collections.Counter` – to count word occurrences
- *(Optional)*: `matplotlib`, `wordcloud`, or `pandas` if you want to extend functionality

---

# Quick Steps:

1. Clone the GitHub repository:
git clone https://github.com/girishbisural/MiniProject1.git
cd MiniProject1

mathematica
Copy
Edit

2. Launch Jupyter Notebook:
jupyter notebook

yaml
Copy
Edit

3. Open and run:
- Open `MiniProject1.ipynb` in your browser
- Run all cells step-by-step
- Analyze the word frequency of the `pg4680.txt` file

---

# Project Files Structure:

MiniProject1/
├── MiniProject1.ipynb # Jupyter Notebook with Python code
├── pg4680.txt # Text file used for analysis (e.g. eBook)
└── README.md # Project documentation

yaml
Copy
Edit

---

# Sample Code Used:

### Load the Text File
```python
with open("pg4680.txt", "r", encoding="utf-8") as f:
    text = f.read()
Clean and Tokenize
python
Copy
Edit
import re
words = re.findall(r'\w+', text.lower())
Count Word Frequency
python
Copy
Edit
from collections import Counter
counter = Counter(words)
print(counter.most_common(10))
Extend This Project:
You can improve and expand this project by:

Adding stopword removal (using nltk or custom list)

Creating word clouds (wordcloud library)

Visualizing results with matplotlib or seaborn

Exporting data to CSV with pandas

References & Resources:
Python re module

collections.Counter

Jupyter Notebook

NLTK stopwords

Wordcloud Library

Credits:
Author: Girish Bisural

GitHub Repo: MiniProject1

