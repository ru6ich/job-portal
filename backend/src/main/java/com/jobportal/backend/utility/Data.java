package com.jobportal.backend.utility;

public class Data {
    public static String getMessageBody(String otp, String name) {
        return String.format("""
                <!DOCTYPE html>
                <html>
                <head>
                    <title>One-Time Password (OTP)</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f9f9f9;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 20px auto;
                            background: #ffffff;
                            border: 1px solid #e0e0e0;
                            border-radius: 8px;
                            overflow: hidden;
                        }
                        .email-header {
                            background: #007bff;
                            color: #ffffff;
                            padding: 20px;
                            text-align: center;
                        }
                        .email-body {
                            padding: 20px;
                            color: #333333;
                        }
                        .otp-code {
                            font-size: 24px;
                            font-weight: bold;
                            color: #007bff;
                            margin: 20px 0;
                            text-align: center;
                        }
                        .footer {
                            background: #f0f0f0;
                            color: #888888;
                            padding: 10px 20px;
                            text-align: center;
                            font-size: 12px;
                        }
                        .footer a {
                            color: #007bff;
                            text-decoration: none;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="email-header">
                            <h1>Your OTP Code</h1>
                        </div>
                        <div class="email-body">
                            <p>Hello, %s</p>
                            <p>We received a request to log in to your account. Use the code below to complete your login:</p>
                            <div class="otp-code">%s</div>
                            <p>If you didn't request this, please ignore this email or contact support if you have concerns.</p>
                            <p>Thanks,<br>The JobBook Team</p>
                        </div>
                        <div class="footer">
                            <p>You are receiving this email because of a login attempt on your account.</p>
                            <p><a href="https://example.com">Visit our Help Center</a> for assistance.</p>
                        </div>
                    </div>
                </body>
                </html>
                """, name, otp);
    }
}
