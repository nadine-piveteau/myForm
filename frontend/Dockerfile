FROM node:7 

# Copy the current directory contents into the container at /app
ADD . /myForm/frontend
WORKDIR /myForm/frontend
COPY package.json /myform/frontend

# Install any needed packages specified in requirements.txt
RUN npm install 



# Make port 4200  available to the world outside this container
EXPOSE 4200

# Run app.py when the container launches
CMD ["npm", "start" ]

