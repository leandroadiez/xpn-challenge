Feature: Agregar un producto al carrito de compras

  Como usuario registrado en el sitio "www.tiendaxepelin.com"
  Quiero poder agregar un producto al carrito de compras
  Para poder proceder con la compra

  Scenario: Agregar un producto al carrito exitosamente
    Given el usuario está registrado y ha iniciado sesión en "www.tiendaxepelin.com"
    When el usuario navega a la página del producto "Camisa Azul"
    And el usuario selecciona la cantidad "1"
    And el usuario hace clic en el botón "Agregar al carrito"
    Then el producto "Camisa Azul" debería estar en el carrito de compras
    And el carrito de compras debería mostrar "1" como la cantidad del producto

# Feature: Eliminar un producto del carrito de compras

#   Como usuario registrado en el sitio "www.tiendaxepelin.com"
#   Quiero poder eliminar un producto del carrito de compras
#   Para que no se realice la compra de ese producto

#   Scenario: Eliminar un producto del carrito exitosamente
#     Given el usuario está registrado y ha iniciado sesión en "www.tiendaxepelin.com"
#     And el usuario ha agregado un producto "Camisa Azul" al carrito de compras
#     When el usuario navega al carrito de compras
#     And el usuario hace clic en el botón "Eliminar" junto al producto "Camisa Azul"
#     Then el carrito de compras debería estar vacío
#     And no debería haber productos en el carrito

# Feature: Realizar el pago del carrito de compras
#   Como usuario registrado en un sitio “www.tiendaxepelin.com”
#   quiero poder realizar el pago de mi carrito de compras
#   para completar la compra de los productos

#   Scenario: Realizar el pago de los productos que estan agregados al carrito
#   Given - contexto inicial
#   When - usuario realiza acciones
#   Then - expectativa de resultado