FROM alpine:3.6

# Set the working directory to /app
WORKDIR /myForm

# Copy the current directory contents into the container at /app
ADD . /myForm

# Install any needed packages specified in requirements.txt
RUN apk add --update py-pip python nodejs nodejs-npm
RUN pip install -r requirements.txt
RUN npm install -g @angular/cli

# Make port 8000 available to the world outside this container
EXPOSE 4200 4201 

# Run app.py when the container launches
CMD python app.py && ng serve
