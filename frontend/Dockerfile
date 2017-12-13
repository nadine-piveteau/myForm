FROM node:7

# Copy the current directory contents into the container at /app
ADD . /myForm/frontend
WORKDIR /myForm/frontend
COPY package.json /myform/frontend

# Install any needed packages specified in requirements.txt
RUN npm install
