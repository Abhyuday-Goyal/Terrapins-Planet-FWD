import requests

url = "https://planetfwd.us.auth0.com/oauth/token"

payload = {
    "client_id": "t0SQf3wM9e2gEvgnJDFTSJSwJjHONz13",
    "client_secret": "l0lgzHI8Lb3zC5YKDmIiHjkV1qXXHUj5YstMCFW73qwlNhIqBodwzuWjfiwV9NSJ",
    "audience": "https://app.planetfwd.com",
    "grant_type": "client_credentials"
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.status_code)
response2 = response.json()
print(response2['access_token'])