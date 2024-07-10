package com.example.mobileApp;

import com.example.mobileApp.Blog;
import com.example.mobileApp.BlogService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class BlogControllerTest {

    @InjectMocks
    private BlogController blogController;

    @Mock
    private BlogService blogService;

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(blogController).build();
    }

    @Test
    public void testGetAllBlogs() throws Exception {
        Blog blog = new Blog();
        blog.setId(1L);
        blog.setTitle("Test Blog");

        List<Blog> blogs = Arrays.asList(blog);

        when(blogService.getAllBlogs()).thenReturn(blogs);

        mockMvc.perform(get("/api/blogs/getAllBlogs")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("[{'id':1,'title':'Test Blog'}]"));
    }

    @Test
    public void testGetBlogById() throws Exception {
        Blog blog = new Blog();
        blog.setId(1L);
        blog.setTitle("Test Blog");

        when(blogService.getBlogById(1L)).thenReturn(blog);

        mockMvc.perform(get("/api/blogs/getBlog/1")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("{'id':1,'title':'Test Blog'}"));
    }

    @Test
    public void testGetBlogByIdNotFound() throws Exception {
        when(blogService.getBlogById(1L)).thenReturn(null);

        mockMvc.perform(get("/api/blogs/getBlog/1")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @Test
    public void testCreateBlog() throws Exception {
        Blog blog = new Blog();
        blog.setId(1L);
        blog.setTitle("Test Blog");

        when(blogService.createBlog(any(Blog.class))).thenReturn(blog);

        ObjectMapper objectMapper = new ObjectMapper();
        String blogJson = objectMapper.writeValueAsString(blog);

        mockMvc.perform(post("/api/blogs/creatBlog")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(blogJson))
                .andExpect(status().isOk())
                .andExpect(content().json("{'id':1,'title':'Test Blog'}"));
    }

    @Test
    public void testDeleteBlog() throws Exception {
        mockMvc.perform(delete("/api/blogs/deleteBlog/1"))
                .andExpect(status().isNoContent());
    }
}
