FROM alpine:3.6

# Copy the current directory contents into the container at /app
ADD . /myForm/backend
WORKDIR /myForm/backend

# Install any needed packages specified in requirements.txt
RUN apk add --update py-pip python 
RUN pip install -r requirements.txt

# Make port 4201 available to the world outside this container
EXPOSE  8000 

# Run app.py when the container launches
CMD python app.py
