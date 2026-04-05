"""
Отправка ответа гостя на свадьбу на почту невесты.
"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '—')
    attend = body.get('attend', 'yes')
    guests = body.get('guests', '1')
    wishes = body.get('wishes', '')

    attend_text = 'Придёт ✅' if attend == 'yes' else 'Не придёт ❌'
    guests_text = f'{guests} чел.' if attend == 'yes' else '—'

    html = f"""
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fdf8f4; border: 1px solid #e8d5bc;">
        <h2 style="color: #3d2c1e; font-size: 24px; margin-bottom: 24px; text-align: center;">
            Новый ответ гостя 💌
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px 0; color: #9e7c58; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Имя</td>
                <td style="padding: 10px 0; color: #3d2c1e; font-size: 16px;">{name}</td>
            </tr>
            <tr style="border-top: 1px solid #e8d5bc;">
                <td style="padding: 10px 0; color: #9e7c58; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Присутствие</td>
                <td style="padding: 10px 0; color: #3d2c1e; font-size: 16px;">{attend_text}</td>
            </tr>
            <tr style="border-top: 1px solid #e8d5bc;">
                <td style="padding: 10px 0; color: #9e7c58; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Гостей</td>
                <td style="padding: 10px 0; color: #3d2c1e; font-size: 16px;">{guests_text}</td>
            </tr>
            {'<tr style="border-top: 1px solid #e8d5bc;"><td style="padding: 10px 0; color: #9e7c58; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Пожелания</td><td style="padding: 10px 0; color: #3d2c1e; font-size: 16px;">' + wishes + '</td></tr>' if wishes else ''}
        </table>
        <p style="margin-top: 32px; text-align: center; color: #c9a96e; font-size: 13px; letter-spacing: 2px;">✦ Никита &amp; Елизавета · 14.06.2026 ✦</p>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'RSVP: {name} — {attend_text}'
    msg['From'] = 'lizaiv18@gmail.com'
    msg['To'] = 'lizaiv18@gmail.com'
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login('lizaiv18@gmail.com', smtp_password)
        server.sendmail('lizaiv18@gmail.com', 'lizaiv18@gmail.com', msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'ok': True})
    }
