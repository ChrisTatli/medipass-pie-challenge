class Client {

    getPies(pageOffset, order, searchString){
        let url = "https://pie.now.sh/pies?q=" + searchString + "&isPieOfTheDay=true&_page=" + 
                    pageOffset + "&_limit=5&_sort=price&_order=" + order;
        console.log(url);
        return fetch(url, {
            method: 'get',
            headers: {
                accept: 'application/json',
            },
        }).then(this.checkStatus)
          .then(this.parseJson);
    }

    getStores(){
        let url = "https://pie.now.sh/stores";
        return fetch(url, {
            method: 'get',
            headers: {
                accept: 'application/json',
            },
        }).then(this.checkStatus)
          .then(this.parseJson);
    }

    getStore(storeId){
        let url = "https://pie.now.sh/stores/" + storeId;
        return fetch(url, {
            method: 'get',
            headers: {
                accept: 'application/json',
            },
        }).then(this.checkStatus)
          .then(this.parseJson);   
    }


    checkStatus(res){
        if(res.status >= 200 && res.status < 300){
            return res;
        } else {
            const err = new Error(`HTTP Error ${res.statusText}`);
            err.status = res.statusText;
            err.res = res;
            console.log(err);
            throw err;
        }
    }

    parseJson(res){
        return res.json();
    }

}

export const client = new Client();