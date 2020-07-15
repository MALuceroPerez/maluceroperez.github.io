class GitHub {
    constructor() {
        this.client_id =  '7a56d1c1729bca80284f';
        this.client_secret = 'edb8bad1b3a3bd727bcf82e8a712866628620e98';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    //Get User
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}$client_id=${this.client_id}&client-secret${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        };
    }

}