FROM alpine:3.6

# Copy the current directory contents into the container at /app
ADD . /myForm
WORKDIR /myForm

# Install any needed packages specified in requirements.txt
RUN apk add --update py-pip python 
RUN pip install -r requirements.txt

# Make port 8000 available to the world outside this container
EXPOSE  4201 

# Run app.py when the container launches
CMD python app.py
