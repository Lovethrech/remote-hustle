<script setup>
const form = reactive({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    areaOfInterest: '',
    skillLevel: '',
    referralSource: ''
})

const submitted = ref(false)

const countries = [
    'Nigeria',
    'Ghana',
    'Kenya',
    'South Africa',
    'United Kingdom',
    'United States',
    'Canada',
    'Other'
]

const interests = [
    'Training',
    'Internships',
    'Jobs',
    'Remote Work',
    'Professional Certification',
    'Job Application Support',
    'Job Placement',
    'Competitions',
    'Other Career Opportunities'
]

const skillLevels = [
    'Beginner',
    'Intermediate',
    'Advanced'
]

const referralSources = [
    'Friend or Family',
    'WhatsApp',
    'Instagram',
    'LinkedIn',
    'Facebook',
    'Google Search',
    'Other'
]

const handleSubmit = () => {
    submitted.value = true
}

useSeoMeta({
    title: 'Register',
    description:
        'Register with Remote Hustle to access training, internships, certifications and career opportunities.'
})
</script>

<template>
    <main>
        <MoleculesPageHero
            eyebrow="Register"
            title="Start your Remote Hustle journey."
            description="Complete the form below and we will contact you with the next steps."
        />

        <section class="section registration">
            <div class="container">
                <div class="registration__layout">
                    <div class="registration__intro">
                        <span class="section-heading__eyebrow">
                            Join Remote Hustle
                        </span>

                        <h2>
                            Take the first step toward your next opportunity.
                        </h2>

                        <p>
                            Register your interest and let us know what you want
                            to learn or achieve. Your information will help the
                            Remote Hustle team connect you with relevant opportunities.
                        </p>
                    </div>

                    <div class="registration__card">
                        <div
                            v-if="submitted"
                            class="registration__success"
                        >
                            <div class="registration__success-icon">
                                ✓
                            </div>

                            <h2>
                                Registration Successful!
                            </h2>

                            <p>
                                Thank you for joining Remote Hustle.
                                We will contact you with the next steps.
                            </p>
                        </div>

                        <form
                            v-else
                            class="registration__form"
                            @submit.prevent="handleSubmit"
                        >
                            <div class="registration__grid">
                                <AtomsBaseInput
                                    id="full-name"
                                    v-model="form.fullName"
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    required
                                />

                                <AtomsBaseInput
                                    id="email"
                                    v-model="form.email"
                                    label="Email Address"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                />

                                <AtomsBaseInput
                                    id="phone"
                                    v-model="form.phone"
                                    label="WhatsApp / Phone Number"
                                    type="tel"
                                    placeholder="+234..."
                                    required
                                />

                                <AtomsBaseSelect
                                    id="country"
                                    v-model="form.country"
                                    label="Country"
                                    :options="countries"
                                    placeholder="Select your country"
                                    required
                                />

                                <AtomsBaseSelect
                                    id="interest"
                                    v-model="form.areaOfInterest"
                                    label="Area of Interest"
                                    :options="interests"
                                    placeholder="Choose an area"
                                    required
                                />

                                <AtomsBaseSelect
                                    id="skill-level"
                                    v-model="form.skillLevel"
                                    label="Current Skill Level"
                                    :options="skillLevels"
                                    placeholder="Select your level"
                                    required
                                />

                                <div class="registration__full">
                                    <AtomsBaseSelect
                                        id="referral-source"
                                        v-model="form.referralSource"
                                        label="How did you hear about Remote Hustle?"
                                        :options="referralSources"
                                        placeholder="Select an option"
                                        required
                                    />
                                </div>
                            </div>

                            <div class="registration__submit">
                                <AtomsBaseButton
                                    variant="primary"
                                    size="lg"
                                    block
                                >
                                    Register
                                </AtomsBaseButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.registration {
    background: var(--color-gray-50);
}

.registration__layout {
    display: grid;
    gap: var(--space-10);
}

.registration__intro {
    max-width: 560px;
}

.registration__intro h2 {
    margin-bottom: var(--space-4);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
}

.registration__intro p {
    font-size: var(--font-size-lg);
}

.registration__card {
    padding: var(--space-6);
    background: var(--color-white);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-sm);
}

.registration__form {
    width: 100%;
}

.registration__grid {
    display: grid;
    gap: var(--space-5);
}

.registration__submit {
    margin-top: var(--space-6);
}

.registration__success {
    padding-block: var(--space-8);
    text-align: center;
}

.registration__success-icon {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    margin: 0 auto var(--space-5);
    color: var(--color-white);
    background: var(--color-success);
    border-radius: 50%;
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
}

.registration__success h2 {
    margin-bottom: var(--space-3);
    font-size: var(--font-size-2xl);
}

.registration__success p {
    max-width: 480px;
    margin-inline: auto;
}

@media (min-width: 768px) {
    .registration__grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .registration__full {
        grid-column: 1 / -1;
    }

    .registration__card {
        padding: var(--space-8);
    }
}

@media (min-width: 1024px) {
    .registration__layout {
        grid-template-columns:
        minmax(0, 0.8fr)
        minmax(0, 1.2fr);
        align-items: start;

        gap: var(--space-16);
    }
}
</style>