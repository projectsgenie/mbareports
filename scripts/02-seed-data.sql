-- Insert sample testimonials
INSERT INTO testimonials (student_name, college_name, feedback, rating) VALUES
('Rahul Sharma', 'IIM Ahmedabad', 'Excellent work quality and delivered on time. The project report was exactly as per university guidelines.', 5),
('Priya Patel', 'Symbiosis Pune', 'Very professional service. The team understood my requirements perfectly and delivered a plagiarism-free report.', 5),
('Arjun Kumar', 'NMIMS Mumbai', 'Outstanding quality and great communication throughout the project. Highly recommended!', 5),
('Sneha Gupta', 'Amity University', 'The project report was well-researched and formatted perfectly. Thank you for the excellent service.', 5),
('Vikram Singh', 'Christ University', 'Delivered before the deadline with exceptional quality. Will definitely use their services again.', 5),
('Ananya Reddy', 'IIT Delhi, MBA', 'Professional approach and high-quality deliverables. The report exceeded my expectations.', 5),
('Karthik Nair', 'SIBM Bengaluru', 'Great experience working with Projects Genie. The team is very knowledgeable and supportive.', 5),
('Meera Joshi', 'Xavier Institute of Management (XIMB)', 'Timely delivery and excellent quality. The project report was exactly what I needed.', 5);

-- Insert sample blog posts
INSERT INTO blogs (title, slug, excerpt, content, published) VALUES
('How to Choose the Right MBA Project Topic', 'how-to-choose-mba-project-topic', 'Selecting the perfect MBA project topic is crucial for your academic success. Here are expert tips to guide you.', 
'<h2>Understanding Your Interests and Career Goals</h2><p>When choosing an MBA project topic, it''s essential to align your selection with your career aspirations and personal interests. This alignment ensures that you remain motivated throughout the research process and gain valuable insights that will benefit your professional journey.</p><h2>Industry Relevance and Current Trends</h2><p>Consider topics that are relevant to current industry trends and challenges. This approach not only makes your project more engaging but also demonstrates your awareness of contemporary business issues.</p><h2>Data Availability and Research Feasibility</h2><p>Ensure that sufficient data and resources are available for your chosen topic. A well-researched project requires access to reliable information and case studies.</p>', true),

('Top 10 MBA Project Ideas for 2024', 'top-mba-project-ideas-2024', 'Discover the most relevant and impactful MBA project ideas that align with current business trends and industry demands.', 
'<h2>Digital Transformation Projects</h2><p>Explore how businesses are adapting to digital technologies and the impact on their operations, customer experience, and competitive advantage.</p><h2>Sustainability and ESG Initiatives</h2><p>Investigate how companies are implementing environmental, social, and governance practices and their effect on business performance.</p><h2>Supply Chain Optimization</h2><p>Analyze supply chain challenges and opportunities, especially in the post-pandemic business environment.</p>', true),

('Common Mistakes to Avoid in MBA Project Reports', 'common-mistakes-mba-project-reports', 'Learn about the most frequent errors students make in their MBA project reports and how to avoid them for better grades.', 
'<h2>Inadequate Literature Review</h2><p>Many students underestimate the importance of a comprehensive literature review. A thorough review of existing research provides the foundation for your project and demonstrates your understanding of the subject matter.</p><h2>Poor Data Analysis</h2><p>Ensure that your data analysis is rigorous and appropriate for your research questions. Use the right statistical tools and interpret results accurately.</p><h2>Weak Conclusion and Recommendations</h2><p>Your conclusions should be well-supported by your findings, and recommendations should be practical and actionable.</p>', true);

-- Insert sample reports
INSERT INTO sample_reports (title, description, category, file_url, file_type, preview_text) VALUES
('Digital Marketing Strategy for E-commerce', 'A comprehensive analysis of digital marketing strategies for e-commerce businesses in the Indian market.', 'Marketing', '/samples/digital-marketing-ecommerce.pdf', 'PDF', 'This project examines the effectiveness of various digital marketing channels including social media, search engine optimization, and paid advertising for e-commerce platforms...'),

('Financial Analysis of Banking Sector', 'Detailed financial performance analysis of major Indian banks over the past five years.', 'Finance', '/samples/banking-financial-analysis.pdf', 'PDF', 'This study provides an in-depth analysis of the financial performance of leading Indian banks, examining key metrics such as ROA, ROE, NPA ratios, and capital adequacy...'),

('Supply Chain Management in Automotive Industry', 'Study of supply chain optimization strategies in the Indian automotive sector.', 'Operations', '/samples/supply-chain-automotive.pdf', 'PDF', 'This research focuses on supply chain challenges and opportunities in the Indian automotive industry, analyzing lean manufacturing principles and vendor management strategies...'),

('HR Analytics and Employee Retention', 'Analysis of HR analytics tools and their impact on employee retention strategies.', 'Human Resources', '/samples/hr-analytics-retention.pdf', 'PDF', 'This project explores the application of HR analytics in understanding employee behavior, predicting turnover, and developing effective retention strategies...'),

('Startup Ecosystem and Venture Capital', 'Comprehensive study of the Indian startup ecosystem and venture capital landscape.', 'Entrepreneurship', '/samples/startup-ecosystem-vc.pdf', 'PDF', 'This research examines the growth of the Indian startup ecosystem, analyzing funding patterns, success factors, and the role of venture capital in fostering innovation...'),
('Customer Relationship Management in Retail', 'Comprehensive study of CRM strategies and their impact on customer loyalty in the retail sector.', 'Marketing', '/samples/crm-retail-analysis.pdf', 'PDF', 'This project examines customer relationship management practices in the retail industry, analyzing customer acquisition, retention strategies, and loyalty program effectiveness...');
