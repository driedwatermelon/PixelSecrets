// pages/about.js

import React from "react";
import './about.css'

const About = () => {
  return (
    <div className="container">

     <div className="content">
      <h1 className="heading">Encoding</h1>
      <hr className="divider" />
      <p className="paragraph">
        <ul style={{listStyleType: "decimal"}}>
          <li>Open pixelsecrets.net</li>
          <li>Navigate to the encoding page through the link on the top of the page</li>
          <li>Write your secret message</li>
          <li>Drag & drop or select the image that you want to embed secret data into</li>
          <li>Choose steganographic algorithm based on your needs</li>
          <li>(Optional) Choose a password if you want to encrypt the message</li>
          <li>Download the newly encoded image</li>
        </ul>
      </p>
     </div>

     <div className="content">
      <h1 className="heading">Decoding</h1>
      <hr className="divider" />
      <p className="paragraph">
        <ul style={{listStyleType: "decimal"}}>
          <li>Open pixelsecrets.net</li>
          <li>Navigate to the decoding page through the link on the top of the page</li>
          <li>Drag & drop or select the image that you want to decode</li>
          <li>Choose steganographic algorithm based on which one was used</li>
          <li>Enter password if the information is encrypted</li>
          <li>Observe the hidden message</li>
        </ul>
      </p>
     </div>

      {/* Best Practices */}
      <div className="content">
      <h1 className="heading">Best practices</h1>
      <hr className="divider" />
      <p className="paragraph">
        <ul>
          <li>Understand your threat model </li>
          <li>Choose steganographic algorithm based on your threat model and needs</li>
          <li>Never share the original image with anyone, as by comparing the original to the encoded image it is trivial to tell that something has been altered.
            </li>
          <li>Recommended to use pictures of natural elements that are large enough in size and complexity. </li>
          <li>Be mindful of image metadata. Images could contain unique device identifiers, GPS location data and more
          </li>
          <li>Share the password through a safe (preferably encrypted) communication method
          </li>
          <li>Recommended to use encryption when using steganography with more secure information
          </li>
          <li>If the algorithms do not work with compression, it is recommended to send it through a medium that does not compress or send it as a zipped file.
          </li>
        </ul>
      </p>
     </div>

     {/* Least Significant bit */}

     <div className="content">
      <h1 className="heading">Least significant bit</h1>
      <p className="paragraph">Least significant bit works by replacing or modifying the least significant bit of pixel values with secret information. Changes in pixel values are so small that they are not detectable by the human eye. LSB should generally be avoided for usage in high threat model situations as it is easy for computers to detect it. As LSB is one of the most common image based steganography algorithms it suits well for CTF type events. </p>
      <hr className="divider" />
      <p className="paragraph">
        <p className="subheading">Pros:</p>
        <ul>
          <li><span>Quality:</span>Minimal distortion to original image</li>
          <li><span>Capacity:</span>Large capacity compared to other methods</li>
          <li><span>Familiarity:</span>Good for CTF type events as LSB is common</li>
          <li><span>Size:</span>Encoded image is the same- or close to the same size as the original image</li>
        </ul>
        <p className="subheading">Cons:</p>
        <ul>
          <li><span>Security:</span>Easily detectable by statistical analysis or more advanced detection techniques</li>
          <li><span>Usability:</span>steganography gets removed by compression</li>
          <li><span>Familiarity:</span>Usually one of the first algorithms that people check if the suspect steganography</li>
          <li><span>Capacity:</span>Limited to size of host file</li>
        </ul>
      </p>
      
     
     </div>

      {/* Writing outside file */}

      <div className="content">
      <h1 className="heading">Writing outside file</h1>
      <p className="paragraph">Writing outside files is one of the most trivial steganographic algorithms. It relies on the fact that image viewing software ignore information that is not within the image's defined structure. This algorithm uses that to its advantage by adding secret information outside the image structure. This algorithm should not be used by people with high threat models as it is easy for computers to detect it. </p>
      <hr className="divider" />
      <p className="paragraph">
        <p className="subheading">Pros:</p>
        <ul>
          <li><span>Quality:</span>no distortion to original image</li>
          <li><span>Capacity:</span>no limit</li>
        </ul>
        <p className="subheading">Cons:</p>
        <ul>
          <li><span>Security:</span>Easily detectable by statistical analysis or more advanced detection techniques</li>
          <li><span>Usability:</span>steganography gets removed by compression</li>
          <li><span>Size:</span>Hidden information is added to original file. Larger file sizes might cause suspicion</li>
          
        </ul>
      </p>
     </div>

     {/* Terms of services */}
     <div className="content">
      <h1 className="heading">Terms of Service</h1>
      <hr className="divider" />
      <p className="paragraph">
        <ul>
          <li>Data Privacy: We do not store any data uploaded by users after the encryption process is complete. Users are responsible for keeping their encrypted data safe and secure.</li>
          <li>Data Usage: Users are solely responsible for the use and distribution of their encrypted data. PixelSecrets is not liable for any misuse of the encrypted data.</li>
          <li>Intellectual Property: Users retain all rights to the data uploaded and encrypted using PixelSecrets. We do not claim any ownership over the encrypted data.</li>
          <li>Limitation of Liability: PixelSecrets is not liable for any damages or losses resulting from the use of the service.</li>
          <li>Legal: You are permitted to use the website for your personal, non-commercial use in a lawful manner</li>
          <li>Changes to Terms: We reserve the right to update or modify the Terms of Service at any time. </li>
        </ul>
      </p>
      <p className="paragraph">By using PixelSecrets you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>
     </div>

    {/* Privacy Policy */}
    <div className="content">
      <h1 className="heading">Privacy policy</h1>
      <hr className="divider" />
      <p className="paragraph">
        <p className="subheading">Information We Collect:</p>
        <ul>
          <li>When you use PixelSecrets to encode and encrypt your data, we may collect and store the data temporarily during the encryption process. However, we do not store any data once the encryption process is complete.</li>
          <li>We do have the ability to collect any personal information such as names, email addresses, or payment details since we do not require user accounts or payments for our services. This is also true for browser specific identifiers and any other information that might be tied to you.</li>
        </ul>

        <p className="subheading">Cookies:</p>
        <ul>
          <li>PixelSecrets does not use cookies or tracking technologies since we do not require user accounts or personalized services.</li>
        </ul>

        <p className="subheading">How We Use Your Information:</p>
        <ul>
          <li>The data you upload for encryption is used solely for the encryption process. We do not access, share, or use your data for any other purpose.</li>
          <li>We do not sell or disclose any data uploaded by users to third parties (as we do not have anything to sell)
</li>
        </ul>

        <p className="subheading">Changes to Privacy Policy:</p>
        <ul>
          <li>We reserve the right to update or modify the Privacy Policy at any time.
</li>
        </ul>
        
      </p>
     </div>

     {/* Questions/Answers */}

     <div className="content">
      <h1 className="heading">Q&A</h1>
      <hr className="divider" />
      <p className="paragraph">
        <p style={{color:"gray"}}>1. What is steganography?</p>
        <p>The art of hiding information within another file or medium. Like for example text in images</p>

        <p style={{color:"gray"}}>2. How secure is steganography?</p>
        <p>Nothing is 100% secure. The most advanced steganographic algorithms might still be broken, given enough time and resources. Machine learning and AI can even be used to detect steganography, making secure digital steganography more difficult. With more sophisticated steganographic algorithms it is unlikely that your image will arouse suspicion. </p>

        <p style={{color:"gray"}}>3. What are real world applications of digital steganography?</p>
        <p>Steganography can be used for secure communication, watermarking, data hiding and more.</p>

        <p style={{color:"gray"}}>4. Is digital steganography legal?</p>
        <p>Legality varies depending on the intent behind its use. Secure communication, watermarking and data protection is legal, meanwhile using it for illegal purposes, like hiding malware, sharing illegal content and engaging in criminal communication may lead to legal consequences.</p>

        <p style={{color:"gray"}}>5. What is the difference between steganography and encryption?</p>
        <p>Steganography hides the existence of the message, while encryption secures the content of the message.</p>

        <p style={{color:"gray"}}>6.Can the web application be used on mobile devices?</p>
        <p>Yes, it works on both desktop and mobile as it runs in the web browser</p>

        <p style={{color:"gray"}}>7. Are there any limitations on the size of the text that can be hidden in an image using the web application?</p>
        <p>It is dependent on the algorithm, but in most cases, the hidden text should not exceed the size of the carrier file.</p>

        <p style={{color:"gray"}}>8. Can I use any image format?</p>
        <p>For now, our tool is limited to JPEG and PNG</p>

        <p style={{color:"gray"}}>9. Are there any precautions that I should take to ensure the security of the hidden text and image</p>
        <p>Yes! Do not share the original image, as comparison between the two will reveal that something has been done. For more information, look at the best practices section.</p>

        <p style={{color:"gray"}}>10. How can I verify that the text has been successfully embedded in the image using the web application?</p>
        <p>The easiest method to verify is by decoding it using our decode page</p>

        <p style={{color:"gray"}}>11. Can the hidden text be extracted from the image without using the same web application?</p>
        <p>Likely no, as our implementation of the steganographic algorithms might be coded in a slightly different way from others.</p>

        <p style={{color:"gray"}}>12. Does the steganography web application provide any additional encryption for the hidden text?</p>
        <p>Yes, although it is optional for the user to use it</p>

        <p style={{color:"gray"}}>13. What encryption method is used to encrypt the message?</p>
        <p>We encrypt the files using AES 256-bit symmetric encryption. The encryption relies on Cipher block chaining (CBC) using PBKDF2 as the key derivation function.</p>
       
        <p style={{color:"gray"}}>14. Can the steganography web application be integrated with other encryption tools for added security?</p>
        <p>Yes. You can use our tool even with encrypted text. Beware that characters outside of UTF-8 encoding might cause issues.</p>
       
        <p style={{color:"gray"}}>15. Does the steganography web application support embedding text in multiple images simultaneously?</p>
        <p>No.</p>


        </p>
     </div>
    </div>
  );
};

export default About;
