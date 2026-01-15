// ===================================
// THEME MANAGEMENT
// ===================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================
const mainNav = document.getElementById('mainNav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        mainNav.style.boxShadow = 'var(--shadow-lg)';
    } else {
        mainNav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// BOOKMARK FUNCTIONALITY
// ===================================
const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// Initialize bookmarks
bookmarkButtons.forEach(btn => {
    const docCard = btn.closest('.document-card');
    const docId = docCard.getAttribute('data-doc');

    if (bookmarks.includes(docId)) {
        btn.style.opacity = '1';
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleBookmark(docId, btn);
    });
});

function toggleBookmark(docId, btn) {
    const index = bookmarks.indexOf(docId);

    if (index > -1) {
        bookmarks.splice(index, 1);
        btn.style.opacity = '0.3';
    } else {
        bookmarks.push(docId);
        btn.style.opacity = '1';
        // Add animation
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// ===================================
// DOCUMENT MODAL CONTENT
// ===================================
const documentContent = {
    furman: {
        title: 'Furman Article',
        subtitle: 'Ethical Considerations in Social Work Practice',
        sections: [
            {
                heading: '📊 Visual Summary',
                content: `
                    <div class="visual-summary">
                        <div class="summary-card">
                            <h4>Main Theme</h4>
                            <p>Explores the intersection of ethics and evidence-based practice in social work, emphasizing the importance of maintaining ethical standards while implementing research-informed interventions.</p>
                        </div>
                        <div class="summary-card">
                            <h4>Key Arguments</h4>
                            <ul>
                                <li>Ethical practice requires balancing client autonomy with professional expertise</li>
                                <li>Evidence-based interventions must be culturally adapted</li>
                                <li>Social workers have an ethical obligation to stay current with research</li>
                                <li>Client values and preferences should guide intervention selection</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '🎯 Core Concepts',
                content: `
                    <div class="concept-visual">
                        <div class="concept-box">
                            <div class="concept-icon">⚖️</div>
                            <h4>Ethical Decision-Making</h4>
                            <p>Framework for navigating complex ethical dilemmas in practice settings</p>
                        </div>
                        <div class="concept-box">
                            <div class="concept-icon">🔬</div>
                            <h4>Evidence Integration</h4>
                            <p>How to critically evaluate and apply research findings to practice</p>
                        </div>
                        <div class="concept-box">
                            <div class="concept-icon">👥</div>
                            <h4>Client-Centered Care</h4>
                            <p>Prioritizing client values, culture, and preferences in treatment planning</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '💡 Key Takeaways',
                content: `
                    <div class="takeaways">
                        <div class="takeaway-item">
                            <span class="number">1</span>
                            <p>Ethics and evidence are not competing priorities - they must work together</p>
                        </div>
                        <div class="takeaway-item">
                            <span class="number">2</span>
                            <p>Cultural competence is an ethical imperative in evidence-based practice</p>
                        </div>
                        <div class="takeaway-item">
                            <span class="number">3</span>
                            <p>Professional development and staying current with research is an ethical responsibility</p>
                        </div>
                        <div class="takeaway-item">
                            <span class="number">4</span>
                            <p>Informed consent requires explaining the evidence base for interventions</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '🗣️ Discussion Starters',
                content: `
                    <div class="discussion-prompts">
                        <p><strong>For class discussion:</strong></p>
                        <ul>
                            <li>"How do we balance evidence-based practice with cultural humility?"</li>
                            <li>"What happens when research evidence conflicts with client preferences?"</li>
                            <li>"Is it ethical to use interventions without strong evidence bases?"</li>
                            <li>"How can we ensure our practice stays ethically grounded as technology evolves?"</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    nasw: {
        title: 'NASW Technology Standards 2017',
        subtitle: 'Updated Technology Standards for Social Work Practice',
        sections: [
            {
                heading: '📊 Visual Summary',
                content: `
                    <div class="visual-summary">
                        <div class="summary-card">
                            <h4>Purpose</h4>
                            <p>Provides comprehensive guidelines for social workers using technology in practice, covering everything from telehealth to social media to data security.</p>
                        </div>
                        <div class="summary-card">
                            <h4>Four Main Standards</h4>
                            <ol>
                                <li><strong>Technology and Social Work Practice</strong> - Core competencies</li>
                                <li><strong>Ethical Use of Technology</strong> - Professional boundaries</li>
                                <li><strong>Data Security & Confidentiality</strong> - Protecting client information</li>
                                <li><strong>Regulatory Compliance</strong> - Legal requirements</li>
                            </ol>
                        </div>
                    </div>
                `
            },
            {
                heading: '🎯 Key Standards Breakdown',
                content: `
                    <div class="standards-grid">
                        <div class="standard-card">
                            <h4>💻 Digital Competence</h4>
                            <ul>
                                <li>Maintain current technology skills</li>
                                <li>Understand platform capabilities and limitations</li>
                                <li>Provide accessible services across digital divide</li>
                            </ul>
                        </div>
                        <div class="standard-card">
                            <h4>🔒 Privacy & Security</h4>
                            <ul>
                                <li>Use encrypted communication platforms</li>
                                <li>Secure storage of electronic records</li>
                                <li>Clear policies on data retention and disposal</li>
                            </ul>
                        </div>
                        <div class="standard-card">
                            <h4>⚖️ Professional Boundaries</h4>
                            <ul>
                                <li>Maintain appropriate online presence</li>
                                <li>Clear social media policies</li>
                                <li>Avoid dual relationships in digital spaces</li>
                            </ul>
                        </div>
                        <div class="standard-card">
                            <h4>📱 Telehealth Standards</h4>
                            <ul>
                                <li>Informed consent for remote services</li>
                                <li>Emergency protocols for virtual sessions</li>
                                <li>Technology backup plans</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '💡 Practical Applications',
                content: `
                    <div class="applications">
                        <div class="app-item">
                            <h4>✅ DO:</h4>
                            <ul>
                                <li>Use HIPAA-compliant platforms for client communication</li>
                                <li>Regularly update passwords and security settings</li>
                                <li>Provide clear informed consent about technology use</li>
                                <li>Have backup plans when technology fails</li>
                                <li>Document technology-related decisions in case notes</li>
                            </ul>
                        </div>
                        <div class="app-item">
                            <h4>❌ DON'T:</h4>
                            <ul>
                                <li>Use personal social media to communicate with clients</li>
                                <li>Store client information on unsecured devices</li>
                                <li>Assume all clients have equal access to technology</li>
                                <li>Friend or follow current clients on social media</li>
                                <li>Share client information via unencrypted email</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '🗣️ Discussion Starters',
                content: `
                    <div class="discussion-prompts">
                        <p><strong>For class discussion:</strong></p>
                        <ul>
                            <li>"How do these 2017 standards hold up in 2026? What needs updating?"</li>
                            <li>"What challenges do you foresee in implementing these standards in field placement?"</li>
                            <li>"How can we balance accessibility with security requirements?"</li>
                            <li>"What are the ethical implications of the digital divide in service delivery?"</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    raines: {
        title: 'Raines and Kelly (2020) - Chapter 17',
        subtitle: 'Technology in Social Work Practice',
        sections: [
            {
                heading: '📊 Visual Summary',
                content: `
                    <div class="visual-summary">
                        <div class="summary-card">
                            <h4>Chapter Focus</h4>
                            <p>Examines the practical integration of technology into social work practice, including benefits, challenges, and best practices for digital service delivery.</p>
                        </div>
                        <div class="summary-card">
                            <h4>Main Topics</h4>
                            <ul>
                                <li>Evolution of technology in social work</li>
                                <li>Telehealth and remote service delivery</li>
                                <li>Digital tools for assessment and intervention</li>
                                <li>Ethical considerations in tech-mediated practice</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '🎯 Technology Applications',
                content: `
                    <div class="tech-applications">
                        <div class="tech-card">
                            <h4>📹 Telehealth</h4>
                            <p><strong>Benefits:</strong> Increased access, convenience, reduced barriers</p>
                            <p><strong>Challenges:</strong> Technology barriers, privacy concerns, therapeutic relationship</p>
                        </div>
                        <div class="tech-card">
                            <h4>📱 Mobile Apps</h4>
                            <p><strong>Benefits:</strong> Real-time support, self-monitoring, engagement</p>
                            <p><strong>Challenges:</strong> Quality control, data security, digital literacy</p>
                        </div>
                        <div class="tech-card">
                            <h4>💾 Electronic Records</h4>
                            <p><strong>Benefits:</strong> Efficiency, accessibility, data analysis</p>
                            <p><strong>Challenges:</strong> Security, interoperability, learning curve</p>
                        </div>
                        <div class="tech-card">
                            <h4>🌐 Online Communities</h4>
                            <p><strong>Benefits:</strong> Peer support, reduced isolation, accessibility</p>
                            <p><strong>Challenges:</strong> Moderation, misinformation, boundary issues</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '💡 Best Practices',
                content: `
                    <div class="best-practices">
                        <div class="practice-item">
                            <span class="icon">🎓</span>
                            <div>
                                <h4>Continuous Learning</h4>
                                <p>Stay updated on emerging technologies and their applications in social work</p>
                            </div>
                        </div>
                        <div class="practice-item">
                            <span class="icon">🤝</span>
                            <div>
                                <h4>Client-Centered Approach</h4>
                                <p>Assess client comfort and access to technology before implementation</p>
                            </div>
                        </div>
                        <div class="practice-item">
                            <span class="icon">🔐</span>
                            <div>
                                <h4>Security First</h4>
                                <p>Prioritize data protection and client confidentiality in all tech use</p>
                            </div>
                        </div>
                        <div class="practice-item">
                            <span class="icon">⚖️</span>
                            <div>
                                <h4>Ethical Framework</h4>
                                <p>Apply NASW Code of Ethics to all technology-mediated interactions</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '🗣️ Discussion Starters',
                content: `
                    <div class="discussion-prompts">
                        <p><strong>For class discussion:</strong></p>
                        <ul>
                            <li>"Can technology enhance the therapeutic relationship, or does it always create distance?"</li>
                            <li>"How do we ensure equitable access to technology-based services?"</li>
                            <li>"What role should AI and automation play in social work practice?"</li>
                            <li>"How has the COVID-19 pandemic permanently changed technology use in our field?"</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    reamer: {
        title: 'Reamer 2023 - AI in Social Work',
        subtitle: 'Artificial Intelligence: Ethical Implications for Social Work',
        sections: [
            {
                heading: '📊 Visual Summary',
                content: `
                    <div class="visual-summary">
                        <div class="summary-card">
                            <h4>Article Purpose</h4>
                            <p>Examines the emerging role of artificial intelligence in social work practice, exploring both opportunities and ethical challenges that AI presents to the profession.</p>
                        </div>
                        <div class="summary-card">
                            <h4>Key Questions Addressed</h4>
                            <ul>
                                <li>How can AI enhance social work practice?</li>
                                <li>What are the ethical risks of AI in social services?</li>
                                <li>How do we prevent algorithmic bias?</li>
                                <li>What is the future of AI in our profession?</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '🤖 AI Applications in Social Work',
                content: `
                    <div class="ai-applications">
                        <div class="ai-card positive">
                            <h4>✅ Potential Benefits</h4>
                            <ul>
                                <li><strong>Risk Assessment:</strong> AI can analyze large datasets to identify risk factors</li>
                                <li><strong>Resource Allocation:</strong> Optimize service delivery and resource distribution</li>
                                <li><strong>Administrative Efficiency:</strong> Automate paperwork and routine tasks</li>
                                <li><strong>Pattern Recognition:</strong> Identify trends in client needs and outcomes</li>
                                <li><strong>24/7 Support:</strong> Chatbots for crisis intervention and information</li>
                            </ul>
                        </div>
                        <div class="ai-card negative">
                            <h4>⚠️ Ethical Concerns</h4>
                            <ul>
                                <li><strong>Algorithmic Bias:</strong> AI systems may perpetuate existing inequalities</li>
                                <li><strong>Privacy Risks:</strong> Extensive data collection and surveillance concerns</li>
                                <li><strong>Dehumanization:</strong> Loss of human connection in helping relationships</li>
                                <li><strong>Accountability:</strong> Who is responsible when AI makes mistakes?</li>
                                <li><strong>Transparency:</strong> "Black box" decision-making processes</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '⚖️ Ethical Framework for AI Use',
                content: `
                    <div class="ethical-framework">
                        <div class="framework-principle">
                            <h4>1. Human Oversight</h4>
                            <p>AI should augment, not replace, professional judgment. Social workers must maintain final decision-making authority.</p>
                        </div>
                        <div class="framework-principle">
                            <h4>2. Transparency</h4>
                            <p>Clients have the right to know when AI is being used in their care and how decisions are made.</p>
                        </div>
                        <div class="framework-principle">
                            <h4>3. Bias Mitigation</h4>
                            <p>Regularly audit AI systems for bias and ensure diverse representation in training data.</p>
                        </div>
                        <div class="framework-principle">
                            <h4>4. Data Protection</h4>
                            <p>Implement robust security measures and minimize data collection to what's necessary.</p>
                        </div>
                        <div class="framework-principle">
                            <h4>5. Cultural Competence</h4>
                            <p>Ensure AI systems are culturally responsive and don't perpetuate stereotypes.</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '🔮 Future Implications',
                content: `
                    <div class="future-implications">
                        <div class="implication-card">
                            <h4>Education & Training</h4>
                            <p>Social work programs must integrate AI literacy into curricula to prepare future practitioners.</p>
                        </div>
                        <div class="implication-card">
                            <h4>Policy Development</h4>
                            <p>Professional organizations need to develop clear guidelines and standards for AI use.</p>
                        </div>
                        <div class="implication-card">
                            <h4>Research Needs</h4>
                            <p>More studies needed on AI effectiveness, ethical implications, and client outcomes.</p>
                        </div>
                        <div class="implication-card">
                            <h4>Professional Identity</h4>
                            <p>Social work must define its unique value in an increasingly automated world.</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '🗣️ Discussion Starters',
                content: `
                    <div class="discussion-prompts">
                        <p><strong>For class discussion:</strong></p>
                        <ul>
                            <li>"Should AI be used in child welfare risk assessments? What are the ethical implications?"</li>
                            <li>"How can we ensure AI systems don't perpetuate racial and socioeconomic biases?"</li>
                            <li>"What aspects of social work can NEVER be automated? Why?"</li>
                            <li>"How do we balance the efficiency of AI with the core values of our profession?"</li>
                            <li>"What role should social workers play in developing AI systems for human services?"</li>
                        </ul>
                    </div>
                `
            }
        ]
    },
    week2: {
        title: 'Week 2: Ethical Issues in EBP',
        subtitle: 'PowerPoint Presentation on Evidence-Based Practice Ethics',
        sections: [
            {
                heading: '📊 Presentation Overview',
                content: `
                    <div class="visual-summary">
                        <div class="summary-card">
                            <h4>Main Focus</h4>
                            <p>Explores the ethical dimensions of evidence-based practice (EBP) in social work, including obligations to use research, balancing evidence with client needs, and ethical decision-making frameworks.</p>
                        </div>
                        <div class="summary-card">
                            <h4>Learning Objectives</h4>
                            <ul>
                                <li>Understand ethical obligations related to EBP</li>
                                <li>Identify ethical dilemmas in implementing evidence-based interventions</li>
                                <li>Apply ethical decision-making frameworks to practice scenarios</li>
                                <li>Balance research evidence with client autonomy and cultural values</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '🎯 Core Ethical Principles in EBP',
                content: `
                    <div class="principles-grid">
                        <div class="principle-card">
                            <h4>🔬 Competence</h4>
                            <p>Social workers have an ethical duty to practice within their areas of competence and stay current with research.</p>
                            <p><em>NASW Code: Social workers should provide services in substantive areas or use intervention techniques only after appropriate study, training, consultation, and supervision.</em></p>
                        </div>
                        <div class="principle-card">
                            <h4>🤝 Client Self-Determination</h4>
                            <p>Clients have the right to make informed decisions about their treatment, including choosing interventions.</p>
                            <p><em>Tension: What if client preferences conflict with evidence-based recommendations?</em></p>
                        </div>
                        <div class="principle-card">
                            <h4>⚖️ Do No Harm</h4>
                            <p>Using interventions without evidence base may cause harm through ineffective or counterproductive treatment.</p>
                            <p><em>Question: Is it ethical to use unproven interventions when evidence-based options exist?</em></p>
                        </div>
                        <div class="principle-card">
                            <h4>🌍 Cultural Competence</h4>
                            <p>Evidence must be applied with cultural humility and adapted to client contexts.</p>
                            <p><em>Challenge: Most research has been conducted with limited cultural diversity.</em></p>
                        </div>
                    </div>
                `
            },
            {
                heading: '⚖️ Ethical Dilemmas in EBP',
                content: `
                    <div class="dilemmas">
                        <div class="dilemma-card">
                            <h4>Dilemma 1: Limited Evidence for Specific Populations</h4>
                            <p><strong>Scenario:</strong> You work with immigrant communities, but most EBP research was conducted with white, middle-class populations.</p>
                            <p><strong>Ethical Questions:</strong></p>
                            <ul>
                                <li>Do you use the intervention anyway and adapt it?</li>
                                <li>Do you seek alternative approaches with less evidence?</li>
                                <li>How do you balance fidelity to the model with cultural adaptation?</li>
                            </ul>
                        </div>
                        <div class="dilemma-card">
                            <h4>Dilemma 2: Client Preference vs. Evidence</h4>
                            <p><strong>Scenario:</strong> A client requests a specific therapy that has limited evidence, while declining an evidence-based alternative.</p>
                            <p><strong>Ethical Questions:</strong></p>
                            <ul>
                                <li>How do you honor client autonomy while fulfilling duty of competence?</li>
                                <li>What is your responsibility to educate clients about evidence?</li>
                                <li>When, if ever, should you refuse to provide a requested service?</li>
                            </ul>
                        </div>
                        <div class="dilemma-card">
                            <h4>Dilemma 3: Agency Constraints</h4>
                            <p><strong>Scenario:</strong> Your agency lacks resources to implement evidence-based interventions that require specialized training.</p>
                            <p><strong>Ethical Questions:</strong></p>
                            <ul>
                                <li>What is your ethical obligation when systemic barriers prevent EBP?</li>
                                <li>How do you advocate for resources while serving current clients?</li>
                                <li>Is it ethical to provide "good enough" services when better options exist?</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '💡 Decision-Making Framework',
                content: `
                    <div class="framework-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>Identify the Ethical Issue</h4>
                                <p>What ethical principles or values are in conflict?</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>Gather Information</h4>
                                <p>What does the research say? What are client preferences? What are contextual factors?</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>Consult Resources</h4>
                                <p>Review NASW Code of Ethics, consult with supervisors, seek peer input</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h4>Consider Alternatives</h4>
                                <p>What are all possible courses of action? What are consequences of each?</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h4>Make a Decision</h4>
                                <p>Choose the option that best aligns with ethical principles and client welfare</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">6</div>
                            <div class="step-content">
                                <h4>Document and Reflect</h4>
                                <p>Record your reasoning and evaluate outcomes for future learning</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '🗣️ Discussion Starters',
                content: `
                    <div class="discussion-prompts">
                        <p><strong>For class discussion:</strong></p>
                        <ul>
                            <li>"Is there an ethical obligation to ONLY use evidence-based interventions? Why or why not?"</li>
                            <li>"How do we handle situations where the 'evidence' is based on research that excluded marginalized communities?"</li>
                            <li>"What role does clinical intuition play in ethical, evidence-based practice?"</li>
                            <li>"How can we be both evidence-based AND culturally responsive?"</li>
                            <li>"What are the ethical implications of the 'research-practice gap' in social work?"</li>
                        </ul>
                    </div>
                `
            }
        ]
    }
};

// ===================================
// MODAL FUNCTIONALITY
// ===================================
const modal = document.getElementById('documentModal');
const modalBody = document.getElementById('modalBody');

function openDocument(docId) {
    const content = documentContent[docId];
    if (!content) return;

    let html = `
        <div class="document-detail">
            <h2 class="detail-title">${content.title}</h2>
            <p class="detail-subtitle">${content.subtitle}</p>
    `;

    content.sections.forEach(section => {
        html += `
            <div class="detail-section">
                <h3 class="detail-heading">${section.heading}</h3>
                ${section.content}
            </div>
        `;
    });

    html += `
        </div>
        <style>
            .document-detail { padding: var(--space-xl) 0; }
            .detail-title { 
                font-family: var(--font-display);
                font-size: var(--text-3xl);
                font-weight: 800;
                color: var(--text-primary);
                margin-bottom: var(--space-sm);
            }
            .detail-subtitle {
                font-size: var(--text-lg);
                color: var(--text-secondary);
                margin-bottom: var(--space-3xl);
                padding-bottom: var(--space-xl);
                border-bottom: 2px solid var(--gray-200);
            }
            .detail-section {
                margin-bottom: var(--space-3xl);
            }
            .detail-heading {
                font-size: var(--text-2xl);
                font-weight: 700;
                color: var(--primary-600);
                margin-bottom: var(--space-xl);
            }
            .visual-summary, .summary-card, .concept-visual, .concept-box,
            .takeaways, .takeaway-item, .discussion-prompts,
            .standards-grid, .standard-card, .applications, .app-item,
            .tech-applications, .tech-card, .best-practices, .practice-item,
            .ai-applications, .ai-card, .ethical-framework, .framework-principle,
            .future-implications, .implication-card, .principles-grid, .principle-card,
            .dilemmas, .dilemma-card, .framework-steps, .step {
                margin-bottom: var(--space-lg);
            }
            .visual-summary {
                display: grid;
                gap: var(--space-xl);
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
            .summary-card {
                background: var(--bg-secondary);
                padding: var(--space-xl);
                border-radius: var(--radius-lg);
                border-left: 4px solid var(--primary-500);
            }
            .summary-card h4 {
                color: var(--primary-600);
                font-weight: 700;
                margin-bottom: var(--space-md);
                font-size: var(--text-lg);
            }
            .summary-card ul, .summary-card ol {
                margin-left: var(--space-lg);
                color: var(--text-secondary);
            }
            .summary-card li {
                margin-bottom: var(--space-sm);
                line-height: 1.6;
            }
            .concept-visual {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: var(--space-xl);
            }
            .concept-box {
                background: var(--bg-secondary);
                padding: var(--space-xl);
                border-radius: var(--radius-lg);
                text-align: center;
                transition: transform var(--transition-base);
            }
            .concept-box:hover {
                transform: translateY(-5px);
            }
            .concept-icon {
                font-size: 3rem;
                margin-bottom: var(--space-md);
            }
            .concept-box h4 {
                font-weight: 700;
                margin-bottom: var(--space-sm);
                color: var(--text-primary);
            }
            .concept-box p {
                color: var(--text-secondary);
                font-size: var(--text-sm);
            }
            .takeaways {
                display: grid;
                gap: var(--space-lg);
            }
            .takeaway-item {
                display: flex;
                gap: var(--space-lg);
                align-items: flex-start;
                background: var(--bg-secondary);
                padding: var(--space-lg);
                border-radius: var(--radius-lg);
            }
            .takeaway-item .number {
                flex-shrink: 0;
                width: 40px;
                height: 40px;
                background: var(--gradient-primary);
                color: white;
                border-radius: var(--radius-full);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: var(--text-lg);
            }
            .takeaway-item p {
                color: var(--text-primary);
                line-height: 1.6;
            }
            .discussion-prompts {
                background: var(--primary-50);
                padding: var(--space-xl);
                border-radius: var(--radius-lg);
            }
            .discussion-prompts strong {
                color: var(--primary-700);
                font-size: var(--text-lg);
            }
            .discussion-prompts ul {
                margin-top: var(--space-md);
                margin-left: var(--space-lg);
            }
            .discussion-prompts li {
                margin-bottom: var(--space-md);
                color: var(--text-primary);
                line-height: 1.6;
            }
            .standards-grid, .tech-applications, .principles-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: var(--space-xl);
            }
            .standard-card, .tech-card, .principle-card {
                background: var(--bg-secondary);
                padding: var(--space-xl);
                border-radius: var(--radius-lg);
                border-top: 3px solid var(--primary-500);
            }
            .standard-card h4, .tech-card h4, .principle-card h4 {
                color: var(--primary-600);
                margin-bottom: var(--space-md);
                font-size: var(--text-lg);
            }
            .standard-card ul, .tech-card p {
                color: var(--text-secondary);
                font-size: var(--text-sm);
                line-height: 1.6;
            }
            .standard-card li {
                margin-bottom: var(--space-sm);
                margin-left: var(--space-lg);
            }
            .tech-card p {
                margin-bottom: var(--space-sm);
            }
            .tech-card strong {
                color: var(--text-primary);
            }
            .applications {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: var(--space-xl);
            }
            .app-item {
                background: var(--bg-secondary);
                padding: var(--space-xl);
                border-radius: var(--radius-lg);
            }
            .app-item h4 {
                font-size: var(--text-xl);
                margin-bottom: var(--space-md);
            }
            .app-item ul {
                margin-left: var(--space-lg);
                color: var(--text-secondary);
            }
            .app-item li {
                margin-bottom: var(--space-sm);
                line-height: 1.6;
            }
            .best-practices {
                display: grid;
                gap: var(--space-lg);
            }
            .practice-item {
                display: flex;
                gap: var(--space-lg);
                align-items: flex-start;
                background: var(--bg-secondary);
                padding: var(--space-lg);
                border-radius: var(--radius-lg);
            }
            .practice-item .icon {
                font-size: 2rem;
                flex-shrink: 0;
            }
            .practice-item h4 {
                color: var(--text-primary);
                margin-bottom: var(--space-xs);
            }
            .practice-item p {
                color: var(--text-secondary);
                font-size: var(--text-sm);
            }
            .ai-applications {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: var(--space-xl);
            }
            .ai-card {
                padding: var(--space-xl);
                border-radius: var(--radius-lg);
            }
            .ai-card.positive {
                background: hsl(140, 70%, 95%);
                border-left: 4px solid var(--success);
            }
            .ai-card.negative {
                background: hsl(0, 70%, 95%);
                border-left: 4px solid var(--error);
            }
            .ai-card h4 {
                font-size: var(--text-xl);
                margin-bottom: var(--space-md);
            }
            .ai-card ul {
                margin-left: var(--space-lg);
            }
            .ai-card li {
                margin-bottom: var(--space-md);
                line-height: 1.6;
            }
            .ai-card strong {
                color: var(--text-primary);
            }
            .ethical-framework, .future-implications, .dilemmas {
                display: grid;
                gap: var(--space-xl);
            }
            .framework-principle, .implication-card, .dilemma-card {
                background: var(--bg-secondary);
                padding: var(--space-xl);
                border-radius: var(--radius-lg);
                border-left: 4px solid var(--primary-500);
            }
            .framework-principle h4, .implication-card h4, .dilemma-card h4 {
                color: var(--primary-600);
                margin-bottom: var(--space-md);
                font-size: var(--text-lg);
            }
            .framework-principle p, .implication-card p {
                color: var(--text-secondary);
                line-height: 1.6;
            }
            .dilemma-card p {
                margin-bottom: var(--space-sm);
                line-height: 1.6;
            }
            .dilemma-card strong {
                color: var(--text-primary);
            }
            .dilemma-card ul {
                margin-left: var(--space-lg);
                margin-top: var(--space-sm);
                color: var(--text-secondary);
            }
            .dilemma-card li {
                margin-bottom: var(--space-sm);
            }
            .framework-steps {
                display: grid;
                gap: var(--space-lg);
            }
            .step {
                display: flex;
                gap: var(--space-lg);
                align-items: flex-start;
                background: var(--bg-secondary);
                padding: var(--space-lg);
                border-radius: var(--radius-lg);
            }
            .step-number {
                flex-shrink: 0;
                width: 50px;
                height: 50px;
                background: var(--gradient-primary);
                color: white;
                border-radius: var(--radius-full);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: var(--text-xl);
            }
            .step-content h4 {
                color: var(--text-primary);
                margin-bottom: var(--space-xs);
                font-size: var(--text-lg);
            }
            .step-content p {
                color: var(--text-secondary);
                font-size: var(--text-sm);
            }
            .principle-card p {
                color: var(--text-secondary);
                line-height: 1.6;
                margin-bottom: var(--space-sm);
            }
            .principle-card em {
                display: block;
                margin-top: var(--space-sm);
                font-size: var(--text-sm);
                color: var(--primary-600);
            }
        </style>
    `;

    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===================================
// DISCUSSION EXPANSION
// ===================================
function expandDiscussion(btn) {
    const card = btn.closest('.discussion-card');
    const points = card.querySelector('.discussion-points');

    if (btn.textContent === 'Show More Points') {
        // Add more discussion points
        const additionalPoints = [
            'How do we measure the effectiveness of these approaches?',
            'What are the implications for social work education?',
            'How can we advocate for policy changes in this area?'
        ];

        additionalPoints.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            li.style.opacity = '0';
            points.appendChild(li);
            setTimeout(() => {
                li.style.transition = 'opacity 0.3s';
                li.style.opacity = '1';
            }, 50);
        });

        btn.textContent = 'Show Less';
    } else {
        // Remove additional points
        const allPoints = points.querySelectorAll('li');
        for (let i = allPoints.length - 1; i >= 3; i--) {
            allPoints[i].remove();
        }
        btn.textContent = 'Show More Points';
    }
}

// ===================================
// SMOOTH SCROLL FOR NAV LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.topic-card, .document-card, .concept-card, .discussion-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

console.log('🎓 SOCW524 Practice Visual Learning Hub loaded successfully!');
