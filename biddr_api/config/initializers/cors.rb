Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '127.0.0.1:3000', 'localhost:3000', '127.0.0.1:9999', 'localhost:9999','127.0.0.1:3001', 'localhost:3001'  
    resource(
      '/api/*', 
      headers: :any,
      credentials: true,
      methods: [:get, :post, :patch, :put, :options, :delete] 
    )
  end
end
