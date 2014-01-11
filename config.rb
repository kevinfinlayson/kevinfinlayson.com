# Middleman Config
# -----------------------------------------------------------------------------

# Remove .html extension from pages
activate :directory_indexes

#  Activate middleman-blog gem
activate :blog do |blog|
  blog.name = 'articles'
  blog.prefix = 'articles'
end

configure :build do
  # Can you do this with Grunt?
  # activate :minify_javascript
end

compass_config do |config|
  config.output_style = :compact
  config.sass_options = { :line_comments => false }
end