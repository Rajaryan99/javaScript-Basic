function one(){
    const username= "RajAryan"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)

    two() // clouser the inner function can access the out function variable
}

// one()