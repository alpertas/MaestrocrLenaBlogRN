
# Blog Post Project

Developing an application that allows us to view the list of blog posts belonging to maestrocr.com and the details of each post.

## Demo

https://github.com/alpertas/MaestrocrLenaBlogRN/assets/16842021/65669d35-3b61-41c6-bddb-18ee136fe853


## Screenshots

- Blog Screen
<img width="400" alt="Blog Screen" src="https://i.ibb.co/BZrDPLn/blog-post-item.png">

- Blog Content Screen
<img width="400" alt="Blog Content Screen" src="https://i.ibb.co/0cWvF5F/blog-post-content.png">

- No Connection Screen
<img width="400" alt="Blog Content Screen" src="https://i.ibb.co/8gYr9nQ/no-connection.png">

## Features

- Pull to refresh
- Infinity Scroll
- Internet connection checker

## TODOs

- [ ]  Refactor!
- [ ]  Test!
- [ ]  Add environment file for private informations. APIs, keys etc.
- [ ]  Optimize FlatList. Use PureComponent for it.
- [ ]  Add Metrics file for all design metrics. Fonts, types, colors etc.
- [ ]  REFACTOR: There is a fetch function to list blogs. and There is a function that fetch new blogs by page number as you scroll down. Having two functions just creates a crowd. It should be fetch by page number only. and always the first page value of 1 should be sent.
