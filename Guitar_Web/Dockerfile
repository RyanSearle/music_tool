FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app

# Install node / npm
ENV NODE_VERSION 10.5.0
ENV NODE_DOWNLOAD_SHA 5d77d2c68c06404028f063dca0947315570ff5e52e46f67f93ef9f6cdcb1b4a8
RUN curl -SL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz" --output nodejs.tar.gz \
&& echo "$NODE_DOWNLOAD_SHA nodejs.tar.gz" | sha256sum -c - \
&& tar -xzf "nodejs.tar.gz" -C /usr/local --strip-components=1 \
&& rm nodejs.tar.gz \
&& ln -s /usr/local/bin/node /usr/local/bin/nodejs

WORKDIR /src
COPY Guitar_Web.csproj .
RUN dotnet restore Guitar_Web.csproj
COPY . ./
RUN dotnet build Guitar_Web.csproj -c Release -o /app

FROM build-env AS publish
RUN dotnet publish Guitar_Web.csproj -c Release -o /app

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app .
EXPOSE 80
ENTRYPOINT ["dotnet", "guitar_web.dll"]