compass_config do |config|
  config.output_style = :compact
  config.sass_options = { :line_comments => false }
end

ignore '/assets/styles/*'
ignore '/assets/scripts/*'

set :css_dir, 'assets'
set :js_dir, 'assets'
set :images_dir, 'images'

activate :directory_indexes

activate :blog do |blog|
  blog.name = 'articles'
  blog.prefix = 'articles'
end

configure :build do
  # Can you do this with Grunt?
  # activate :minify_javascript
end
