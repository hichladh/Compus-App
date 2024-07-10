package com.example.mobileApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping("/getAllBlogs")
    public List<Blog> getAllBlogs() {
        return blogService.getAllBlogs();
    }

    @GetMapping("/getBlog/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable Long id) {
        Blog blog = blogService.getBlogById(id);
        if (blog == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(blog);
    }

    @PostMapping("/creatBlog")
    public Blog createBlog(@RequestBody Blog blog) {
        return blogService.createBlog(blog);
    }

    @DeleteMapping("/deleteBlog/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long id) {
        blogService.deleteBlog(id);
        return ResponseEntity.noContent().build();
    }
}
