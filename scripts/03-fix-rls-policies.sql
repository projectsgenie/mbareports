-- Drop existing policies that might be too restrictive
DROP POLICY IF EXISTS "Admin can manage blogs" ON blogs;
DROP POLICY IF EXISTS "Admin can manage sample reports" ON sample_reports;
DROP POLICY IF EXISTS "Admin can manage testimonials" ON testimonials;
DROP POLICY IF EXISTS "Admin can view and manage leads" ON leads;

-- Create more permissive policies for profiles
CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Recreate admin policies with better logic
CREATE POLICY "Admin can manage blogs" ON blogs
  FOR ALL USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

CREATE POLICY "Admin can manage sample reports" ON sample_reports
  FOR ALL USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

CREATE POLICY "Admin can manage testimonials" ON testimonials
  FOR ALL USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );

CREATE POLICY "Admin can view and manage leads" ON leads
  FOR ALL USING (
    auth.uid() IN (
      SELECT id FROM profiles WHERE role = 'admin'
    )
  );
