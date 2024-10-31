import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from "contentstack";

Contentstack.Utils.addEditableTags();

const Stack = Contentstack.Stack({
    "api_key": process.env.CONTENTSTACK_API_KEY,
    "delivery_token": process.env.CONTENTSTACK_DELIVERY_TOKEN,
    "environment": process.env.CONTENTSTACK_ENVIRONMENT,
    live_preview: {
        preview_token: process.env.CONTENTSTACK_PREVIEW_TOKEN,
        enable: true,
        host: 'rest-preview.contentstack.com'
    }
});

ContentstackLivePreview.init({
    apiKey: process.env.CONTENTSTACK_API_KEY,
    stackSdk: Stack,
    clientUrlParams: {
        protocol: "https",
        host: "app.contentstack.com",
        port: 443,
    },
});

export default {
    getElement(id, type) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Entry(id)
                .toJSON()
                .fetch()
                .then(
                    function success(entry) {
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    getElementWithRefs(id, type, references) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Entry(id)
                .includeReference(...references)
                .toJSON()
                .fetch()
                .then(
                    function success(entry) {
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        console.log('error id', id);
                        reject(err);
                    }
                );
        });
    },

    getElementByUrl(type, url) {
        return new Promise((resolve, reject) => {
            const Query = Stack.ContentType(type)
                .Query()
                .where('url', { '$eq': url })
                .toJSON()
                .find()
                .then(
                    function success(data) {
                        const entry = data[0][0];
                        Contentstack.Utils.addEditableTags(entry, type, true);
                        resolve(entry);
                    },
                    function error(err) {
                        reject(err);
                    }
                );
        })
    },

    getElementByTypeWtihRefs(type, references) {
        return new Promise((resolve, reject) => {
          if (ContentstackLivePreview.hash) {
            Stack.livePreviewQuery({
              live_preview: ContentstackLivePreview.hash
            });
          }
          const Query = Stack.ContentType(type)
            .Query()
            .includeReference(...references)
            .toJSON()
            .find()
            .then(
              function success(entry) {
                Contentstack.Utils.addEditableTags(entry[0][0], type, true);
                resolve(entry);
              },
              function error(err) {
                console.log("error", err);
                reject(err);
              }
            );
        });
      },

    getStack() {
        return Stack;
    }
};

export const onEntryChange = ContentstackLivePreview.onEntryChange;