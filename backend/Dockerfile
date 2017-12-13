FROM alpine:3.6

# Copy the current directory contents into the container at /app
ADD . /myForm/backend
WORKDIR /myForm/backend

# Install any needed packages specified in requirements.txt
RUN apk add --update py-pip python
RUN pip install -r requirements.txt
