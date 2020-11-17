from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located

PATH = "/usr/bin/chromedriver"
driver = webdriver.Chrome(PATH)
titles = []

driver.get('https://deno.land/')
print(driver.title)
driver.get('https://github.com/')
print(driver.title)
driver.quit()

# for title in titles:
#     print(title)
