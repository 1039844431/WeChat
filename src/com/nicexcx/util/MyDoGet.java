package com.nicexcx.util;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyDoGet {

	 public static void doGet(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        response.setContentType("text/html");
	 
	        PrintWriter out;
	        if (GzipUtilities.isGzipSupported(request)
	                && !GzipUtilities.isGzipDisabled(request)) {
	            out = GzipUtilities.getGzipWriter(response);
	            response.setHeader("Content-Encoding", "gzip");
	        } else {
	            out = response.getWriter();
	        }
	 }
}
