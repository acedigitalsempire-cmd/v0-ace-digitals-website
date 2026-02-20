const PHONE_NUMBER = "2349079581937"

export function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`
}

export function getProductWhatsAppLink(productName: string): string {
  const message = `Hi! I'm interested in: ${productName}`
  return getWhatsAppLink(message)
}

export function getHomepageWhatsAppLink(): string {
  const message = `Hi Ace Digitals! I'd like to discuss how you can help my business. Please tell me more about your services.`
  return getWhatsAppLink(message)
}

export function getServiceWhatsAppLink(serviceName: string): string {
  const message = `Hi! I'm interested in learning more about your ${serviceName} service.`
  return getWhatsAppLink(message)
}
