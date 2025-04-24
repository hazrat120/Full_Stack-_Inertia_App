<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048', // 2MB limit
            'status' => 'required|string|in:pending,in_progress,completed',
            'priority' => 'required|string|in:low,medium,high,urgent',
            'due_date' => 'nullable|date',
            'assigned_user_id' => 'required|exists:users,id',
            'project_id' => 'required|exists:projects,id',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Task name is required.',
            'status.in' => 'Status must be one of: pending, in_progress, completed.',
            'priority.in' => 'Priority must be one of: low, medium, high, urgent.',
            'image.image' => 'The uploaded file must be an image.',
            'due_date.date' => 'Please enter a valid date for due date.',
        ];
    }
}
