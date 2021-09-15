FROM gitpod/openvscode-server

RUN npm install -g @aws-amplify/cli
RUN npm install -g expo-cli