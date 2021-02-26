import json
from time import sleep
import requests

# url = 'https://cdn-images-1.listennotes.com/podcasts/learn-english-with-the-british-council-and-OyrCdEz5kYl.300x300.jpg'

# t = "Learn English with the British Council and Premier League"

# t=t.split(" ")
# l = ""
# for s in t:
#     l+= (s+'-')

# print(l.lower())

def link_case(string):
    t = string.split(" ")

    l = ""
    for s in t:
        if(s[-1] == ':'):
            l+= (s[:-1]+'-')
        else:
            l+= (s+'-')

    return l.lower()[:-1]

with open("podcasts.json") as f:
    i=0
    podcasts = json.load(f) 
    for podcast in podcasts:
         url = podcast["id"]
         podcast["id"] = url + str(i)
         i =i + 1
       
    f.close()
    json.dump(podcasts,open("podcasts.json","w"),ensure_ascii=False)#.write(bytes(str(podcasts), "utf8"))
