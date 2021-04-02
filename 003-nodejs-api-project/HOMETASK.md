Create API to create/read/update/delete products using Express

## Model

The Product model should have the following attributes:

- id: required, string ([uuid v4](https://www.npmjs.com/package/uuid)), valid uuid v4
- category: required, string, max length - 50 symbols
- subcategory: string, max length - 50 symbols
- article: string
- name: required, string
- price: required, number, should be greater than 0
- quantity: required, number, should be integer and greater than 0
- manufacturer: required, string
- color: string

You may use [source.csv](./003-api/_requests/source.csv) as input.

# API

The API should contain the following endpoints:

1. GET /api/products:

Should return a list of products. Query parameters:

- name: should return products that name contains the given string
- category: should return all products from the category
- price_from, price_to: should return all products within the given price range. If one of the boundaries is missed - treat it as open range.

If non of the products match the result - return an empty array.

2. GET /api/products/:id

Should return a single product by the id. If there are no such product - return 404 error with appropriate message.

3. POST /api/products

Should create a new product. The body should contain all properties of the product except for ID (should be generated on server).
All properties should be validated according to validation rules. If at least one of the validation rules is violated -
should return 400 error with appropriate message.

4. PUT /api/products/:id

Should update the product by the id. The body may contain all properties of the product except for the id. This API endpoint should do
a partial update (do not update properties that do not present in the request body). All properties should be validated
according to validation rules (except for 'required' rule). If at least one of the validation rules is violated - should
return 400 error with appropriate message.

5. DELETE /api/products/:id

Should delete the product by the id.

6. POST /upload/csv

The endpoint should accept requests with `multipart/form-data` content-type with csv file in the body, parse csv and save new records into storage. You may use [source.csv](./003-api/_requests/source.csv) as input. The api endpoint should do validation (the
same as POST endpoint). For all records that do not pass validation - do not store them and return appropriate message
to the client.

# Validation
For the validation you may use package:
[express-validator](https://express-validator.github.io/docs/)
[openapi-validator-middleware](https://www.npmjs.com/package/openapi-validator-middleware#express)
or implement by your own.

# Storage

Use a file as a persisting layer. All changes should be reflected in the file, so after the service restart it should return the same list of products as before a shutdown.
