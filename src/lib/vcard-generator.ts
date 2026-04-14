/**
 * vCard (.vcf) Generator Utility
 * Generates and triggers download of vCard files for contact management
 */

import { VCardData } from '@/types';

/**
 * Generates a vCard (RFC 5545) compliant string from contact data
 * @param data - Contact information
 * @returns vCard formatted string
 */
export function generateVCard(data: VCardData): string {
  const { firstName, lastName, phone, email, organization, title, photo, url } = data;

  const lines: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${firstName} ${lastName}`,
    `N:${lastName};${firstName};;;`,
  ];

  if (organization) {
    lines.push(`ORG:${escapeVCardField(organization)}`);
  }

  if (title) {
    lines.push(`TITLE:${escapeVCardField(title)}`);
  }

  if (email) {
    lines.push(`EMAIL;TYPE=INTERNET:${email}`);
  }

  if (phone) {
    lines.push(`TEL;TYPE=CELL:${phone}`);
  }

  if (url) {
    lines.push(`URL:${url}`);
  }

  if (photo) {
    lines.push(`PHOTO;VALUE=URI:${photo}`);
  }

  lines.push('END:VCARD');

  return lines.join('\r\n');
}

/**
 * Escapes special characters in vCard fields
 * @param field - Field value to escape
 * @returns Escaped field value
 */
function escapeVCardField(field: string): string {
  return field
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}

/**
 * Downloads a vCard file to the user's device
 * @param vCardData - Contact information
 * @param filename - Name of the file (defaults to firstName_lastName.vcf)
 */
export function downloadVCard(vCardData: VCardData, filename?: string): void {
  const vCard = generateVCard(vCardData);
  const fileName = filename || `${vCardData.firstName}_${vCardData.lastName}.vcf`;

  // Create a blob from the vCard string
  const blob = new Blob([vCard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Copies vCard data to clipboard as a downloadable string
 * @param vCardData - Contact information
 */
export function copyVCardToClipboard(vCardData: VCardData): Promise<void> {
  const vCard = generateVCard(vCardData);
  return navigator.clipboard.writeText(vCard);
}

/**
 * Generates a WhatsApp share link with a message
 * @param phoneNumber - Phone number to send to
 * @param message - Message to send
 * @returns WhatsApp URL
 */
export function generateWhatsAppLink(phoneNumber: string, message?: string): string {
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

/**
 * Generates a mailto link
 * @param email - Email address
 * @param subject - Email subject
 * @param body - Email body
 * @returns mailto URL
 */
export function generateMailtoLink(email: string, subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const queryString = params.toString();
  return `mailto:${email}${queryString ? `?${queryString}` : ''}`;
}
