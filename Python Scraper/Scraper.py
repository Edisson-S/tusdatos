import requests
from bs4 import BeautifulSoup
from optparse import OptionParser
import json


def main(options):
    
    URL = 'https://webscraper.io/test-sites/e-commerce/scroll'
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')
    titles,descriptions,prices=soup.find_all(class_='title'),soup.find_all(class_='description'),soup.find_all(class_='price')
    test=map(buildObjects,titles,descriptions,prices)
    data = list(test)
    print(data)
    if options["filename"] != None:
        filename = options["filename"]
        with open(filename+'.json', 'w') as outfile:
            json.dump(data, outfile)

def buildObjects(title,description,price):
    newObject={"title":title["title"],"description":description.text,"price":price.text}
    return newObject



if __name__ == "__main__":
    parser = OptionParser()
    parser.add_option("-f", "--file", dest="filename",
                  help="write products to FILE", metavar="FILE")
    (options, args) = parser.parse_args()  
    main(vars(options))

