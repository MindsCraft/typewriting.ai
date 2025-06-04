.PHONY: build-Typewriting-homepage

build-Typewriting-homepage:
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out && sed -i '' 's|/_next|./_next|g' index.html
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out && sed -i '' 's|/_next|./_next|g' 404.html
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out/404 && sed -i '' 's|/_next|./_next|g' index.html
	cd /Library/WebServer/Documents/typewriting/typewriting.ai/out && aws s3 sync ../out s3://typewriting-ai-homepage
	aws s3 cp s3://typewriting-ai-homepage s3://typewriting-ai-homepage --recursive --acl public-read