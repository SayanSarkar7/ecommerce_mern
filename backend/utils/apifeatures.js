class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  // search function for name
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    console.log("keyword is : ", keyword);

    this.query = this.query.find({ ...keyword });
    return this;
  }
  // filter function for category
  filter(){
    const queryStrCopy={...this.queryStr};

    // console.log(queryStrCopy);

    const removeFields=["keyword","page","limit"];

    removeFields.forEach((key)=>delete queryStrCopy[key]);

    // console.log(queryStrCopy);

    this.query=this.query.find(queryStrCopy);
    return this;

  }
}

module.exports = ApiFeatures;
