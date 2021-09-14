FROM gitpod/workspace-full-vnc

USER gitpod


RUN touch test .
RUN npm install expo-cli --global