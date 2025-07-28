

const {DateTime} = require("luxon")

module.exports = function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy('./src/styles.css');
   eleventyConfig.addPassthroughCopy('./src/robots.txt');
   eleventyConfig.addPassthroughCopy('./src/images');
   eleventyConfig.addPassthroughCopy('./src/images');
  
  
  
   eleventyConfig.addFilter("postdate",(dateObj)=>{
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
   
   
   })
  return {
   
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};