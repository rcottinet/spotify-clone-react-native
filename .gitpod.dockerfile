FROM gitpod/openvscode-server

USER gitpod


RUN touch test .
RUN npm install expo-cli --global
RUN npm install -g @aws-amplify/cli