package com.example.demo.infrastructure.mapper;

import com.example.demo.domain.models.Task;
import com.example.demo.infrastructure.request.TaskRequest;
import com.example.demo.infrastructure.response.TaskReponse;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(
        componentModel = "spring",
        uses = {
                PersonApiMapper.class,
                UserApiMapper.class,
        }

)
public interface TaskApiMapper {
        TaskReponse modelToResponse(final Task model);

        Task requestToModel(final TaskRequest request);

        List<TaskReponse> modelToResponseList(final List<Task> tasks);
}
