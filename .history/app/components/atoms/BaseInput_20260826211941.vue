<script setup>
defineProps({
    id: {
        type: String,
        required: true
    },

    label: {
        type: String,
        required: true
    },

    type: {
        type: String,
        default: 'text'
    },

    modelValue: {
        type: [String, Number],
        default: ''
    },

    placeholder: {
        type: String,
        default: ''
    },

    required: {
        type: Boolean,
        default: false
    },

    error: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <div class="form-control">
        <label
            :for="id"
            class="form-control__label"
        >
            {{ label }}

            <span
                v-if="required"
                class="form-control__required"
            >
                *
            </span>
        </label>

        <input
            :id="id"
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            :required="required"
            class="form-control__input"
            :class="{ 'form-control__input--error': error }"
            @input="emit('update:modelValue', $event.target.value)"
        >

        <p
            v-if="error"
            class="form-control__error"
        >
            {{ error }}
        </p>
    </div>
</template>

<style scoped>
.form-control {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
}

.form-control__label {
    color: var(--color-gray-800);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
}

.form-control__required {
    color: var(--color-danger);
}

.form-control__input {
    min-height: 48px;
    padding-inline: var(--space-4);

    color: var(--color-gray-900);
    background: var(--color-white);

    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-md);

    transition:
        border-color var(--transition-fast),
        box-shadow var(--transition-fast);
}

.form-control__input::placeholder {
  color: var(--color-gray-400);
}

.form-control__input:focus {
  outline: none;

  border-color: var(--color-primary);

  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.form-control__input--error {
  border-color: var(--color-danger);
}

.form-control__error {
  color: var(--color-danger);

  font-size: var(--font-size-sm);
}
</style>