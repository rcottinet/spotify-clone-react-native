FROM gitpod/openvscode-server


RUN touch test .
RUN npm install expo-cli --global
RUN npm install -g @aws-amplify/cli