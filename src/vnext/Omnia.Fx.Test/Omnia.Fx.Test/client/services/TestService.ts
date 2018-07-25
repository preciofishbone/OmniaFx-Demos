import { HttpClient, HttpClientConstructor, Inject, ServiceLocator } from "@omnia/fx";

export class TestService {
    @Inject<HttpClientConstructor>(HttpClient,
        { configPromise: HttpClient.createOmniaRequestConfig(ServiceLocator.getUrl("03df96b6-c29d-4d45-ba79-d84b8bee9b2c")) }) private httpClient: HttpClient;

    public getData(): any {
        return this.httpClient.get("/test/dummy");        
    }

}