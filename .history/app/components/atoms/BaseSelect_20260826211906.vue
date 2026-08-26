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

    modelValue: {
        type: String,
        default: ''
    },

    options: {
        type: Array,
        required: true
    },

    placeholder: {
        type: String,
        default: 'Select an option'
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

        <select
            :id="id"
            :value="modelValue"
            :required="required"
            class="form-control__select"
            :class="{ 'form-control__select--error': error }"
            @change="emit('update:modelValue', $event.target.value)"
        >
            <option
                value=""
                disabled
            >
                {{ placeholder }}
            </option>

            <option
                v-for="option in options"
                :key="option"
                :value="option"
            >
                {{ option }}
            </option>
        </select>

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

.form-control__select {
    min-height: 48px;
    padding-inline: var(--space-4);
    color: var(--color-gray-900);
    background: var(--color-white);
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition:
        border-color var(--transition-fast),
        box-shadow var(--transition-fast);
}

.form-control__select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.form-control__select--error {
    border-color: var(--color-danger);
}

.form-control__error {
  color: var(--color-danger);

  font-size: var(--font-size-sm);
}
</style>