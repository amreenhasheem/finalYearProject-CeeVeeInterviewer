import pandas as pd
from rake_nltk import Rake
import random 
import sys

Question2=pd.read_csv(r'D:\xampp\htdocs\interviewapplication\questionanswerdataset.csv') #path to your dataset 
r=Rake()

ques=""
ans=""
#inpt=""
questionNumber = 0
new = ""
p = Question2[Question2['skillset'].str.match('Ja')]
ques = p.questions[0]
new = ques

inptstr = sys.argv[1:] #insert string here 

anskey= Question2.iloc[:,2].values
anskey =list(anskey)
anskey_derived = []
for s in list(anskey):
    r.extract_keywords_from_text(str(s))
    #t=rankedphrase
    rankedphrse = r.get_ranked_phrases()
    anskey_derived.append(','.join(rankedphrse))
    
column_values = pd.Series(anskey_derived)
col_values = str(column_values)
Question2.insert(loc=0 , column="keywords", value = column_values)



def submit(inptstr):
   
    inpt = inptstr
    
    inpt = ' '.join(inptstr)
    
    
    
    r.extract_keywords_from_text(inpt)
    #temp=rankedphrs
    rankedphrs = r.get_ranked_phrases()
    rankedphrs
    
    count2=[]
    
    keyword=""
    for rows in Question2['questions']:
        count=0
        #print("blah",rows)
        for i in rankedphrs:
            #print("hell",type(rows))
            if (i in rows):
                count=count+1
        count2.append(count)
    
    maxcount=max(count2)
    #c=maxcount
    
    indextomap = count2.index(maxcount)
    
    ques = Question2.loc[indextomap, 'questions']
    questionNumber = Question2.loc[indextomap, 'qid']
    
    #inptstr.set(str(ques))
    new = ques
    
   
    
    if (maxcount == 0):
        v = Question2['questions']
        n = Question2['qid']
        ques=random.choice(v)
        new = ques
        questionNumber = random.choice(n)
            
    print(questionNumber)
    

    
submit(inptstr)