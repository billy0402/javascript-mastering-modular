// https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html
import {createClient} from './elasticsearch'
import {elasticsearchHost} from './secrets'

const client = createClient({
    host: elasticsearchHost
})
client
    .get({
        index: `blog`,
        type: `articles`,
        body: {
            query: {
                match: {
                    tags: [`modularity`, `javascript`]
                }
            }
        }
    })
    .then(response => {
        // ...
    })
