import ollama
from pathlib import Path


def get_desc(image_path):
    # Define image path
    image_path = Path(image_path)

    # Read the image file as bytes
    with open(image_path, "rb") as image_file:
        image_data = image_file.read()

    out = ollama.generate(
        model="llava",
        prompt="""You need to identify what the object in the image is and what the dimensions of the object are.
        It is very important that you give me the dimensions so make your best approximations and return length x width x heigh in cms.
        Think about it carefullly and answer properly, if you feel like you can't then approximate. No matter what you need to give dimensions """,
        images=[image_data]
    )

    print(out['response'])

    return out['response']

if __name__ == "__main__":
    get_desc("dig.jpeg")
    